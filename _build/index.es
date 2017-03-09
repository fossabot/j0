const path = require('path');
const sable = require('sable');
const console = require('j1/console').create('build');
const promisify = require('j1/promisify');
const debounce = require('j1/debounce');
const changeExt = require('j1/changeExt');
const rm = require('j1/rm');
const chokidar = require('chokidar');
const glob = promisify(require('glob'));

const transpile = require('./transpile.es');
const generateDocument = require('./generateDocument.es');
const compileCSS = require('./compileCSS.es');

const projectRoot = path.join(__dirname, '..');
const documentRoot = path.join(projectRoot, 'docs');
const templatePath = path.join(__dirname, 'template.html');
const stylusPath = path.join(__dirname, 'page.styl');
const jsPath = path.join(__dirname, 'page.es');

const ignorePattern = /[/\\][._]|node_modules/;
const targetExts = ['.es', '.mjs'];

const COMPILE_DEBOUNCE = 300;

function buildFile(file) {
	if (targetExts.includes(path.extname(file)) && !ignorePattern.test(file)) {
		const testFilePath = file.replace(/\.[^/]+$/, '.test.es');
		const relativePath = path.relative(projectRoot, testFilePath);
		const destPath = changeExt(path.join(documentRoot, relativePath), '.js');
		return transpile(testFilePath, destPath)
		.catch(console.onError);
	} else if (this && this.unwatch) {
		this.unwatch(file);
	}
	return null;
}

function buildDocument(file) {
	if ((/\.test\.js$/).test(file) && !ignorePattern.test(file)) {
		const relativePath = path.relative(documentRoot, file);
		const testScriptPath = path.join(projectRoot, relativePath.replace(/\.test\.js$/, '.test.es'));
		console.debug(`document ${relativePath}`);
		return generateDocument(testScriptPath)
		.then(() => {
			console.debug(`documented ${relativePath}`);
		})
		.catch(console.onError);
	} else if (this && this.unwatch) {
		this.unwatch(file);
	}
	return null;
}

function buildAllDocuments() {
	console.debug('all documents');
	return glob(path.join(documentRoot, '**', '*.test.js'), {nodir: true})
	.then((files) => {
		return Promise.all([].concat(...files).map(buildDocument));
	});
}

function buildCSS() {
	compileCSS(stylusPath)
	.catch(console.onError);
}

function buildJS() {
	transpile(jsPath, path.join(documentRoot, 'page.js'))
	.catch(console.onError);
}

rm(documentRoot)
.then(() => {
	if (process.argv.includes('--watch')) {
		sable({documentRoot: documentRoot});
		chokidar.watch(templatePath, {ignoreInitial: true})
			.on('add', debounce(buildAllDocuments, COMPILE_DEBOUNCE))
			.on('change', debounce(buildAllDocuments, COMPILE_DEBOUNCE));
		chokidar.watch(stylusPath)
			.on('add', debounce(buildCSS, COMPILE_DEBOUNCE))
			.on('change', debounce(buildCSS, COMPILE_DEBOUNCE));
		chokidar.watch(jsPath)
			.on('add', debounce(buildJS, COMPILE_DEBOUNCE))
			.on('change', debounce(buildJS, COMPILE_DEBOUNCE));
		chokidar.watch(path.join(documentRoot), {
			ignoreInitial: true,
			ignored: ignorePattern
		})
			.on('add', buildDocument)
			.on('change', buildDocument);
		chokidar.watch(projectRoot, {ignored: ignorePattern})
			.on('add', buildFile)
			.on('change', buildFile);
	} else {
		glob(path.join(projectRoot, '**', '*.es'), {
			nodir: true,
			ignore: [
				'**/node_modules'
			]
		})
		.then((files) => {
			return Promise.all([].concat(...files).map(buildFile));
		})
		.then(() => {
			return buildAllDocuments();
		})
		.then(() => {
			return compileCSS();
		})
		.catch(console.onError);
	}
})
.catch(console.onError);

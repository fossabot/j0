const path = require('path');
const console = require('j1/console').create('test/build');
const promisify = require('j1/promisify');
const debounce = require('j1/debounce');
const chokidar = require('chokidar');
const glob = promisify(require('glob'));

const transpile = require('./transpile.es');
const generateDocument = require('./generateDocument.es');
const compileCSS = require('./compileCSS.es');
const projectRoot = path.join(__dirname, '..');
const documentRoot = path.join(projectRoot, 'docs');
const ignorePattern = /[/\\][._]|node_modules/;
const targetExts = ['.es', '.mjs'];

const CSS_DEBOUNCE = 300;

function buildFile(file) {
	if (targetExts.includes(path.extname(file)) && !ignorePattern.test(file)) {
		const testFile = file.replace(/\.[^/]+$/, '.test.es');
		return transpile(testFile)
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
		return generateDocument(testScriptPath)
		.catch(console.onError);
	} else if (this && this.unwatch) {
		this.unwatch(file);
	}
	return null;
}

if (process.argv.includes('--watch')) {
	chokidar.watch(path.join(__dirname, 'page.styl'))
		.on('add', debounce(compileCSS, CSS_DEBOUNCE))
		.on('change', debounce(compileCSS, CSS_DEBOUNCE));
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
		return glob(path.join(documentRoot, '**', '*.test.js'), {nodir: true});
	})
	.then((files) => {
		return Promise.all([].concat(...files).map(buildDocument));
	})
	.then(() => {
		return compileCSS();
	})
	.catch(console.onError);
}

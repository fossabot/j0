const path = require('path');
const sable = require('sable');
const console = require('j1/console').create('build');
const promisify = require('j1/promisify');
const rm = require('j1/rm');
const chokidar = require('chokidar');
const paze = require('paze');
const glob = promisify(require('glob'));

const transpile = require('./transpile.es');
const compileCSS = require('./compileCSS.es');
const packageJSON = require('../package');

const projectRoot = path.join(__dirname, '..');
const documentRoot = path.join(projectRoot, 'docs');
const stylusPath = path.join(__dirname, 'page.styl');
const jsPath = path.join(__dirname, 'page.es');
const templatePath = path.join(__dirname, 'template.html');

const ignorePattern = /[/\\][._]|node_modules/;
const targetExts = ['.es', '.mjs'];

const watchFlag = process.argv.includes('--watch');

const processes = {};

function buildFile(file) {
	if (targetExts.includes(path.extname(file)) && !ignorePattern.test(file)) {
		const dir = path.relative(projectRoot, file.replace(/\/(?:index|test).*$/, ''));
		const scriptPath = path.join(projectRoot, dir, 'test', 'index.es');
		const destPath = path.join(documentRoot, dir, 'index.test.js');
		if (!processes[dir]) {
			processes[dir] = transpile(scriptPath, destPath)
			.catch(console.onError)
			.then(() => {
				delete processes[dir];
			});
		}
		return processes[dir];
	} else if (this && this.unwatch) {
		this.unwatch(file);
	}
	return null;
}

function addLineNumbers(code) {
	return code
	.split(/\n/)
	.map((line) => {
		return `<span class="linenum"></span>${line}`;
	})
	.join('\n');
}

function buildDocument(file) {
	if ((/\.test\.js$/).test(file) && !ignorePattern.test(file)) {
		const dir = path.relative(documentRoot, path.join(file, '..'));
		const scriptPath = path.join(projectRoot, dir, 'index.mjs');
		const testScriptPath = path.join(projectRoot, dir, 'test', 'index.es');
		const destPath = path.join(path.dirname(file), 'index.html');
		console.debug(`document ${dir}`);
		return paze({
			src: scriptPath,
			test: testScriptPath,
			watch: watchFlag,
			beforeRender: function (context) {
				context.dest = destPath;
				context.template = templatePath;
				context.name = dir;
				context.package = packageJSON;
				context.titleHTML = `${packageJSON.name}/${context.name}`.split(/\s*\/\s*/)
				.reverse()
				.map((fragment, index) => {
					let html = fragment;
					if (0 < index) {
						html = `<a href="${'../'.repeat(index)}">${fragment}</a>`;
					}
					return html;
				})
				.reverse()
				.join('/');
				context.root = `${context.name.split('/').map(() => {
					return '..';
				})
				.join('/')}`;
				context.code = addLineNumbers(context.code);
				context.test.code = addLineNumbers(context.test.code);
			}
		})
		.then(() => {
			console.debug(`documented ${dir}`);
		})
		.catch(console.onError);
	} else if (this && this.unwatch) {
		this.unwatch(file);
	}
	return null;
}

function buildCSS() {
	return compileCSS(stylusPath, path.join(documentRoot, 'page.css'));
}

function buildJS() {
	return transpile(jsPath, path.join(documentRoot, 'page.js'));
}

function startServer() {
	return sable({documentRoot: documentRoot})
	.then(() => {
		return [
			[projectRoot, buildFile, {ignored: ignorePattern}],
			[documentRoot, buildDocument, {ignored: ignorePattern}],
			[stylusPath, buildCSS],
			[jsPath, buildJS]
		].map(([pattern, fn, options = {}]) => {
			options.awaitWriteFinish = {stabilityThreshold: 100};
			return chokidar.watch(pattern, options)
				.on('add', fn)
				.on('change', fn);
		});
	});
}

function build() {
	return glob(path.join(projectRoot, '**', '*.es'), {
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
	});
}

rm(documentRoot)
.then(() => {
	return Promise.all([
		buildCSS(),
		buildJS()
	]);
})
.then(() => {
	return watchFlag ? startServer() : build();
})
.catch(console.onError);

const path = require('path');
const sable = require('sable');
const console = require('j1/console').create('builder');
const promisify = require('j1/promisify');
const rm = require('j1/rm');
const chokidar = require('chokidar');
const glob = promisify(require('glob'));

const constants = require('./constants');
const buildModule = require('./buildModule');
const buildDocument = require('./buildDocument');
const buildIndexes = require('./buildIndexes');
const compileJS = require('./compileJS');
const compileCSS = require('./compileCSS');

function buildCSS() {
	return compileCSS(constants.styl, path.join(constants.dest, 'page.css'));
}

function buildPageJS() {
	return compileJS(constants.js, path.join(constants.dest, 'page.js'));
}

function startServer() {
	return Promise.all([
		new Promise((resolve) => {
			chokidar.watch(constants.src)
				.on('add', function (file) {
					this.unwatch(file);
					buildModule(file);
				})
				.on('error', console.onError)
				.once('ready', function () {
					resolve(this);
				});
		}),
		...[
			[constants.dest, buildDocument],
			[constants.styl, buildCSS]
		].map(([pattern, fn, options = {}]) => {
			options.awaitWriteFinish = {stabilityThreshold: 100};
			return new Promise((resolve) => {
				chokidar.watch(pattern, options)
					.on('add', fn)
					.on('change', fn)
					.on('error', console.onError)
					.once('ready', function () {
						resolve(this);
					});
			});
		})
	])
	.then(buildIndexes)
	.then(() => {
		console.debug('starting sable server');
		return sable({documentRoot: constants.dest});
	});
}

function build() {
	return glob(path.join(constants.src, '**', '*'), {
		nodir: true,
		ignore: [
			'**/node_modules'
		]
	})
	.then((files) => {
		return Promise.all([].concat(...files).map(buildModule));
	})
	.then(() => {
		return glob(path.join(constants.dest, '**', '*.test.js'), {nodir: true});
	})
	.then((files) => {
		return Promise.all([].concat(...files).map(buildDocument));
	})
	.then(buildIndexes);
}

rm(constants.dest)
.then(() => {
	return Promise.all([
		buildCSS(),
		buildPageJS()
	]);
})
.then(() => {
	return constants.watch ? startServer() : build();
})
.catch(console.onError);

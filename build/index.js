const path = require('path');
const sable = require('sable');
const console = require('j1/console').create('builder');
const promisify = require('j1/promisify');
const rm = require('j1/rm');
const cp = require('j1/cp');
const chokidar = require('chokidar');
const glob = promisify(require('glob'));

const constants = require('./constants');
const buildModule = require('./buildModule');
const buildDocument = require('./buildDocument');
const buildIndexes = require('./buildIndexes');
const compileJS = require('./compileJS');
const compileCSS = require('./compileCSS');

function buildCSS() {
	return Promise.all(constants.styl.map((file) => {
		const relativePath = path.relative(__dirname, file);
		return compileCSS(file, path.join(constants.dest, relativePath));
	}));
}

function buildPageJS() {
	return Promise.all(constants.js.map((file) => {
		const relativePath = path.relative(__dirname, file);
		return compileJS(file, path.join(constants.dest, relativePath));
	}));
}

async function startServer() {
	await Promise.all([
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
	]);
	console.debug('starting sable server');
	return sable({
		documentRoot: constants.dest,
		quiet: constants.quiet
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
		const list = [].concat(...files);
		const {length} = list;
		function buildJS() {
			const file = list.shift();
			if (file) {
				console.info(`buildModule: ${length - list.length}/${length}`);
				const promise = buildModule(file);
				return promise ? promise.then(buildJS) : buildJS();
			}
		}
		return buildJS();
	})
	.then(() => {
		return glob(path.join(constants.dest, '**', '*.test.js'), {nodir: true});
	})
	.then((files) => {
		const list = [].concat(...files);
		const {length} = list;
		function buildJS() {
			const file = list.shift();
			if (file) {
				console.info(`buildModule: ${length - list.length}/${length}`);
				return buildDocument(file)
				.then(buildJS);
			}
		}
		return buildJS();
	})
	.then(buildIndexes);
}

async function start() {
	await rm(constants.dest);
	await Promise.all([
		buildCSS(),
		buildPageJS(),
		cp(constants.staticFiles, constants.staticFilesDest)
	]);
	return constants.watch ? startServer() : build();
}

start()
.catch(console.onError);

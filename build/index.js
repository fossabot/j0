const path = require('path');
const sable = require('sable');
const console = require('j1/console').create('build');
const rm = require('j1/rm');
const promisify = require('j1/promisify');
const leftpad = require('j1/leftpad');
const glob = promisify(require('glob'));

const buildHTML = require('./buildHTML');
const copyAssets = require('./copyAssets');
const {
	projectRoot,
	dest,
	targetDirectories,
	serverMode
} = require('./constants');

function buildInOrder(modulePaths) {
	const remains = modulePaths.slice();
	const {length} = remains;
	const {length: digits} = `${length}`;
	async function build() {
		const modulePath = remains.shift();
		const started = Date.now();
		if (modulePath) {
			console.info(`${leftpad(length - remains.length, digits)}/${length} ${modulePath}`);
			await Promise.all([
				copyAssets(path.join(projectRoot, modulePath, 'test'), path.join(dest, modulePath)),
				buildHTML(modulePath)
			]);
			console.debug(`${modulePath} ${Date.now() - started}ms`);
			return build();
		}
	}
	return build();
}

async function start() {
	await rm(dest);
	await copyAssets(path.join(__dirname, 'assets'));
	const modulePaths = [].concat(...await Promise.all(targetDirectories.map(function (dir) {
		return glob(path.join(dir, '**', 'test', 'index.js'));
	})))
	.map(function (absoluteTestScriptPath) {
		return path.relative(projectRoot, path.join(path.dirname(absoluteTestScriptPath), '..'));
	});
	console.info(`Found ${modulePaths.length} test scripts`);
	await buildInOrder(modulePaths);
	if (serverMode) {
		sable({
			documentRoot: dest,
			quiet: true
		});
	}
}

start()
.catch(console.onError);

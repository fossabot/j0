const path = require('path');
const SableServer = require('sable');
const console = require('j1/console').create('build');
const rm = require('j1/rm');
const promisify = require('j1/promisify');
const cp = require('j1/cp');
const glob = promisify(require('glob'));

const buildSiteMap = require('./buildSiteMap');
const copyTestRunners = require('./copyTestRunners');
const copyAssets = require('./copyAssets');
const buildPolyfill = require('./buildPolyfill');
const {
	projectRoot,
	dest,
	targetDirectories,
	serverMode
} = require('./constants');

async function copy(absolutePath) {
	const relativePath = path.relative(projectRoot, absolutePath)
	.replace(/test\//g, '');
	await cp(
		absolutePath,
		path.join(dest, relativePath)
	);
}

async function start() {
	await rm(dest);
	await Promise.all([
		[].concat(...await Promise.all(targetDirectories.map((dir) => {
			return glob(path.join(dir, '**', 'test', '*'), {
				nodir: true,
				ignore: [
					path.join(__dirname, '**', '*')
				]
			});
		})))
		.filter((absolutePath) => {
			return path.extname(absolutePath) !== '.js';
		})
		.map(copy)
	]);
	await buildSiteMap();
	await copyTestRunners();
	await copyAssets(path.join(__dirname, 'assets'));
	if (serverMode) {
		const server = new SableServer({
			documentRoot: dest,
			quiet: true
		});
		await server.start();
	} else {
		await buildPolyfill();
	}
}

start()
.catch(console.onError);

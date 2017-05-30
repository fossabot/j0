const path = require('path');
const chokidar = require('chokidar');
const cp = require('j1/cp');
const promisify = require('j1/promisify');
const console = require('j1/console').create('copyAssets');
const glob = promisify(require('glob'));
const transpileJs = require('../transpileJs');
const constants = require('../constants');
const {
	serverMode,
	dest
} = constants;

function copy(from, to) {
	if (serverMode) {
		chokidar.watch(from, {awaitWriteFinish: {stabilityThreshold: 200}})
		.on('change', function () {
			cp(from, to);
		});
	}
	return cp(from, to);
}

async function copyAssets(dirPath, baseDir = dest) {
	const files = await glob(path.join(dirPath, '**', '*'));
	console.debug(dirPath);
	return Promise.all(files.map(function (filePath) {
		const destPath = path.join(baseDir, path.relative(dirPath, filePath));
		if (/\.min\.\w+$/.test(filePath)) {
			return copy(filePath, destPath);
		}
		switch (path.extname(filePath)) {
		case '.js':
			return transpileJs(filePath, destPath);
		default:
			return copy(filePath, destPath);
		}
	}));
}

module.exports = copyAssets;

const path = require('path');
const cp = require('j1/cp');
const promisify = require('j1/promisify');
const changeExt = require('j1/changeExt');
const console = require('j1/console').create('copyAssets');
const glob = promisify(require('glob'));

const transpileJs = require('../transpileJs');
const transpileStyl = require('../transpileStyl');
const {dest} = require('../constants');

async function copyAssets(dirPath, baseDir = dest) {
	const files = await glob(path.join(dirPath, '**', '*'));
	console.debug(dirPath);
	return Promise.all(files.map(function (filePath) {
		const destPath = path.join(baseDir, path.relative(dirPath, filePath));
		switch (path.extname(filePath)) {
		case '.js':
			return transpileJs(filePath, destPath);
		case '.styl':
			return transpileStyl(filePath, changeExt(destPath, '.css'));
		default:
			return cp(filePath, destPath);
		}
	}));
}

module.exports = copyAssets;

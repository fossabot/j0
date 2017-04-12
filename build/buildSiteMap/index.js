const path = require('path');
const mu = require('mu2');
const console = require('j1/console').create('buildWebdriverScript');
const writeFile = require('j1/writeFile');
const promisify = require('j1/promisify');
const glob = promisify(require('glob'));

const {dest} = require('../constants');

async function buildSiteMap() {
	const files = await glob(path.join(dest, '**', 'index.html'));
	const context = {
		modules: files.map((filePath) => {
			return {path: path.relative(dest, path.dirname(filePath))};
		})
	};
	const stream = mu.compileAndRender(path.join(__dirname, 'template.xml'), context);
	stream.on('error', console.onError);
	return writeFile(path.join(dest, 'sitemap.xml'), stream);
}

module.exports = buildSiteMap;

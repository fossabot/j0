const path = require('path');
const mu = require('mu2');
const writeFile = require('j1/writeFile');

const {
	dest,
	wdioTemplate
} = require('./constants');

function buildWebdriverScript(src, port) {
	const relativePath = path.relative(dest, path.dirname(src));
	const destPath = path.join(dest, relativePath, 'index.wdio.js');
	const context = {
		name: relativePath,
		url: `http://127.0.0.1:${port}/${relativePath}/`
	};
	const stream = mu.compileAndRender(wdioTemplate, context);
	return writeFile(destPath, stream);
}

module.exports = buildWebdriverScript;

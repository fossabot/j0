const path = require('path');
const mu = require('mu2');
const writeFile = require('j1/writeFile');
const console = require('j1/console').create('buildWebdriverScript');

const {
	dest,
	wdioTemplate,
	wdioDest
} = require('./constants');

function buildWebdriverScript(files, port) {
	const context = {
		modules: files.map((src) => {
			const name = path.relative(dest, path.dirname(src));
			return {
				name,
				url: `http://127.0.0.1:${port}/${name}/`
			};
		})
	};
	const stream = mu.compileAndRender(wdioTemplate, context);
	stream.on('error', console.onError);
	return writeFile(wdioDest, stream);
}

module.exports = buildWebdriverScript;

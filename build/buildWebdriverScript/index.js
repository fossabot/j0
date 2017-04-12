const path = require('path');
const mu = require('mu2');
const writeFile = require('j1/writeFile');
const promisify = require('j1/promisify');
const glob = promisify(require('glob'));

const {dest} = require('../constants');

async function buildWebdriverScript(port) {
	const files = await glob(path.join(dest, '**', 'index.js'));
	const context = {
		modules: files.map((src) => {
			const name = path.relative(dest, path.dirname(src));
			return {
				name,
				url: `http://127.0.0.1:${port}/${name}/`
			};
		})
	};
	const stream = mu.compileAndRender(path.join(__dirname, 'template.js'), context);
	return writeFile(path.join(dest, 'wdio.js'), stream);
}

module.exports = buildWebdriverScript;

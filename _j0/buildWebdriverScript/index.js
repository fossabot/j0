const fs = require('fs');
const path = require('path');
const writeFile = require('j1/writeFile');
const promisify = require('j1/promisify');
const readFile = promisify(fs.readFile, fs);
const {dest} = require('../constants');
async function buildWebdriverScript(port) {
	const code = (await readFile(path.join(__dirname, 'script.js'), 'utf8'))
	.replace(/PAGE_URL/g, `http://127.0.0.1:${port}/`);
	return writeFile(path.join(dest, 'wdio.js'), code);
}
module.exports = buildWebdriverScript;

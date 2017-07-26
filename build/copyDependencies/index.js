const fs = require('fs');
const promisify = require('j1/promisify');
const readFile = promisify(fs.readFile, fs);
const writeFile = require('j1/writeFile');
const console = require('j1/console').create('copyDependencies');
const {copies} = require('../constants');

async function copyDependencies() {
	for (const {from, to} of copies) {
		const buffer = Buffer.concat(await Promise.all(
			from
			.map(((file) => {
				return readFile(file);
			}))
		))
		await writeFile(to, buffer);
	}
}

module.exports = copyDependencies;

if (!module.parent) {
	copyDependencies()
	.catch(console.onError);
}

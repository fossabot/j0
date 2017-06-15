const path = require('path');
const fs = require('fs');
const promisify = require('j1/promisify');
const readFile = promisify(fs.readFile, fs);

async function load(filename) {
	return (await readFile(path.join(__dirname, '..', 'data', filename)))
	.toString()
	.trim()
	.split(/\s*\n\s*/)
	.map((line) => {
		const trimmed = line
		.replace(/\s*[#@].*/, '');
		return trimmed && trimmed.split(/\s*;\s*/);
	})
	.filter(({length}) => {
		return 0 < length;
	});
}

module.exports = load;

const fs = require('fs');
const path = require('path');
const UglifyJS = require('uglify-js');
const promisify = require('j1/promisify');
const readFile = promisify(fs.readFile, fs);
const writeFile = require('j1/writeFile');
const fileSize = require('j1/fileSize');
const console = require('j1/console').create('generatePolyfill');

const {
	projectDir,
	polyfills,
	polyfillDir
} = require('../constants');

async function generatePolyfill() {
	console.info('loading');
	const code = Buffer.concat(await Promise.all(
		polyfills
		.map(async (filePath) => {
			const buffer = await readFile(filePath);
			return buffer;
		})
	));
	console.info('minify');
	const {code: minifiedCode} = UglifyJS.minify(`${code}`);
	const minified = Buffer.from(minifiedCode);
	console.info(`${fileSize(code.length)} -> ${fileSize(minified.length)}`);
	await writeFile(path.join(polyfillDir, 'polyfill.min.js'), minified);
	console.info('update package.json');
	const {
		license,
		version,
		author,
		repository
	} = JSON.parse(await readFile(path.join(projectDir, 'package.json')));
	const data = Object.assign(
		{name: 'j0-polyfill'},
		{
			license,
			version,
			author,
			repository,
			main: 'polyfill.min.js'
		}
	);
	await writeFile(path.join(polyfillDir, 'package.json'), JSON.stringify(data, null, 2));
	console.info('done');
}

module.exports = generatePolyfill;

if (!module.parent) {
	generatePolyfill()
	.catch((error) => {
		console.onError(error);
		process.exit(1);
	});
}

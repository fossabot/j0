const fs = require('fs');
const path = require('path');
const acorn = require('acorn');
const UglifyJS = require('uglify-js');
const promisify = require('j1/promisify');
const readFile = promisify(fs.readFile, fs);
const writeFile = require('j1/writeFile');
const fileSize = require('j1/fileSize');
const console = require('j1/console').create('generatePolyfill');
const CopyRights = require('../CopyRights');

const {
	docsDir,
	projectDir,
	polyfills,
	polyfillDir
} = require('../constants');

async function generatePolyfill() {
	console.info('loading');
	const codes = await Promise.all(
		polyfills
		.map(async (filePath) => {
			const buffer = await readFile(filePath);
			return buffer;
		})
	);
	const total = codes.reduce((total, {length}) => {
		return total + length;
	}, 0);
	console.info('minify');
	const source = codes.join('\n');
	const copyRights = new CopyRights();
	acorn.parse(source, {
		onComment(block, text, start, end) {
			copyRights.checkComment(block, text, start, end);
		}
	});
	const {code: minifiedCode} = UglifyJS.minify(`(function(){${source}}());`);
	const minified = Buffer.from(`${copyRights}${minifiedCode}`);
	console.info(`${fileSize(total)} -> ${fileSize(minified.length)}`);
	await Promise.all([
		writeFile(path.join(docsDir, 'polyfill.min.js'), minified),
		writeFile(path.join(polyfillDir, 'polyfill.min.js'), minified)
	]);
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

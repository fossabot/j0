const path = require('path');
const fs = require('fs');
const UglifyJS = require('uglify-js');
const console = require('j1/console').create('copyTestRunners');
const promisify = require('j1/promisify');
const writeFile = require('j1/writeFile');
const fileSize = require('j1/fileSize');
const readFile = promisify(fs.readFile, fs);

async function copyTestRunners() {
	const buffer = Buffer.concat(
		await Promise.all(
			[
				require.resolve('mocha/mocha.js'),
				require.resolve('chai/chai.js')
			]
			.map((filePath) => {
				return readFile(filePath);
			})
		)
	);
	console.info('Minifying codes...');
	const {code: minifiedCode} = UglifyJS.minify(buffer.toString(), {});
	let data = Buffer.from(minifiedCode);
	let dest = path.join(__dirname, '..', 'assets', 'test-runner.min.js');
	console.info(`Done: ${fileSize(buffer.length)} -> ${fileSize(data.length)}`);
	console.info(`Writing the result to ${dest}`);
	await writeFile(dest, data);
	console.info('Loading stylesheets...');
	data = Buffer.concat(
		await Promise.all(
			[
				require.resolve('mocha/mocha.css')
			]
			.map((filePath) => {
				return readFile(filePath);
			})
		)
	);
	dest = path.join(__dirname, '..', 'assets', 'test-runner.min.css');
	console.info(`Writing the result to ${dest}`);
	await writeFile(dest, data);
}

if (module.parent) {
	module.exports = copyTestRunners;
} else {
	copyTestRunners()
	.catch(console.onError);
}

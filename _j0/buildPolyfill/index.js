const fs = require('fs');
const path = require('path');
const UglifyJS = require('uglify-js');
const console = require('j1/console').create('polyfill');
const rm = require('j1/rm');
const writeFile = require('j1/writeFile');
const promisify = require('j1/promisify');
const readFile = promisify(fs.readFile, fs);
const transpileJs = require('../transpileJs');
const {projectRoot} = require('../constants');
const destDir = path.join(__dirname, '..', 'polyfill');

function minify(code) {
	const {code: minifiedCode} = UglifyJS.minify(code);
	return minifiedCode;
}

async function generatePackageJSON() {
	const {
		license,
		version,
		author,
		repository
	} = JSON.parse(await readFile(path.join(projectRoot, 'package.json')));
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
	await writeFile(path.join(destDir, 'package.json'), JSON.stringify(data, null, 2));
}

async function createPolyfill() {
	await rm(destDir);
	const codes = await Promise.all(
		[
			'polyfill-symbol.js',
			'polyfill-regenerator-runtime.js',
			'polyfill-others.js'
		]
		.map(async (name) => {
			const src = path.join(__dirname, '..', 'assets', name);
			const code = await transpileJs(src);
			return minify(code);
		})
	);
	const code = codes.join('\n');
	await writeFile(path.join(destDir, 'polyfill.min.js'), code);
	await generatePackageJSON();
}

if (module.parent) {
	module.exports = createPolyfill;
} else {
	createPolyfill()
	.catch(console.onError);
}

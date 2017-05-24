const fs = require('fs');
const path = require('path');
const UglifyJS = require('uglify-js');
const console = require('j1/console').create('polyfill');
const writeFile = require('j1/writeFile');
const promisify = require('j1/promisify');
const readFile = promisify(fs.readFile, fs);
const transpileJs = require('../transpileJs');
const {projectRoot} = require('../constants');

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
			repository
		}
	);
	await writeFile(path.join(projectRoot, 'polyfill', 'package.json'), JSON.stringify(data, null, 2));
}

async function createPolyfill() {
	const codes = await Promise.all(
		[
			'polyfill-symbol.js',
			'polyfill-regenerator-runtime.js',
			'polyfill-others.js'
		]
		.map(async (name) => {
			const src = path.join(projectRoot, 'docs', name);
			const code = await transpileJs(src);
			return minify(code);
		})
	);
	const code = codes.join('\n');
	await writeFile(path.join(projectRoot, 'polyfill', 'polyfill.min.js'), code);
	await generatePackageJSON();
}

if (module.parent) {
	module.exports = createPolyfill;
} else {
	createPolyfill()
	.catch(console.onError);
}

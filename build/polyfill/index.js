const fs = require('fs');
const path = require('path');
const UglifyJS = require('uglify-js');
const console = require('j1/console').create('polyfill');
const writeFile = require('j1/writeFile');
const promisify = require('j1/promisify');
const readFile = promisify(fs.readFile, fs);
const {
	projectRoot,
	dest
} = require('../constants');

function minify(code) {
	const compressor = new UglifyJS.Compressor({});
	const stream = new UglifyJS.OutputStream({
		beautify: true,
		comments: true
	});
	let ast = UglifyJS.parse(code);
	ast.figure_out_scope();
	ast = ast.transform(compressor);
	ast.figure_out_scope();
	ast.compute_char_frequency();
	ast.mangle_names();
	ast.print(stream);
	return stream.toString();
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

async function packagePolyfill() {
	const code = await readFile(path.join(dest, 'polyfill.js'), 'utf8');
	const minifiedCode = minify(code);
	await writeFile(path.join(projectRoot, 'polyfill', 'polyfill.min.js'), minifiedCode);
	await generatePackageJSON();
}

if (module.parent) {
	module.exports = packagePolyfill;
} else {
	packagePolyfill()
	.catch(console.onError);
}

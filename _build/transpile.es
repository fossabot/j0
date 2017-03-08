const path = require('path');
const console = require('j1/console').create('test/transpile');
const changeExt = require('j1/changeExt');
const rollup = require('rollup');
const builtins = require('rollup-plugin-node-builtins');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const buble = require('rollup-plugin-buble');

const projectRoot = path.join(__dirname, '..');
const documentRoot = path.join(projectRoot, 'docs');

function transpile(file) {
	const relativePath = path.relative(projectRoot, file);
	console.debug(`transpile ${relativePath}`);
	return rollup.rollup({
		entry: file,
		plugins: [
			builtins(),
			nodeResolve({extensions: ['.mjs', '.js', '.json']}),
			commonjs(),
			buble()
		]
	})
	.then(function (bundle) {
		return bundle.write({
			format: 'es',
			dest: path.join(documentRoot, changeExt(relativePath, '.js'))
		});
	});
}

module.exports = transpile;

const path = require('path');
const console = require('j1/console').create('test/transpile');
const changeExt = require('j1/changeExt');
const rollup = require('rollup');
const builtins = require('rollup-plugin-node-builtins');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const buble = require('rollup-plugin-buble');

const specPath = path.join(__dirname, '..', 'specs');

function transpile(file) {
	const relativePath = path.relative(specPath, file);
	console.debug(`transpile ${relativePath}`);
	return rollup.rollup({
		entry: file,
		plugins: [
			builtins(),
			nodeResolve({extensions: ['.js', '.es', '.json']}),
			commonjs(),
			buble()
		]
	})
	.then(function (bundle) {
		return bundle.write({
			format: 'es',
			dest: changeExt(file, '.js')
		});
	});
}

module.exports = transpile;

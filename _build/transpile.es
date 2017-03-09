const path = require('path');
const rollup = require('rollup');
const builtins = require('rollup-plugin-node-builtins');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const buble = require('rollup-plugin-buble');
const console = require('j1/console').create('transpile');

const projectRoot = path.join(__dirname, '..');

function transpile(src, dest) {
	console.debug(`${path.relative(projectRoot, src)}\n -> ${path.relative(projectRoot, dest)}`);
	return rollup.rollup({
		entry: src,
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
			dest: dest
		});
	});
}

module.exports = transpile;

const path = require('path');
const rollup = require('rollup');
const builtins = require('rollup-plugin-node-builtins');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('babel-core');
const console = require('j1/console').create('transpile');
const writeFile = require('j1/writeFile');

const projectRoot = path.join(__dirname, '..');

function transpile(src, dest) {
	console.debug(`${path.relative(projectRoot, src)}\n -> ${path.relative(projectRoot, dest)}`);
	return rollup.rollup({
		entry: src,
		plugins: [
			builtins(),
			nodeResolve({extensions: ['.mjs', '.js', '.json']}),
			commonjs()
		]
	})
	.then((bundle) => {
		const {code: esCode} = bundle.generate({format: 'es'});
		const {code: transpiledCode} = babel.transform(esCode, {presets: ['latest']});
		return writeFile(dest, transpiledCode);
	});
}

module.exports = transpile;

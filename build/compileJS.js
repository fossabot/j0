const path = require('path');
const rollup = require('rollup');
const rollupWatch = require('rollup-watch');
const builtins = require('rollup-plugin-node-builtins');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('babel-core');
const console = require('j1/console').create('compileJS');
const writeFile = require('j1/writeFile');

const {watch, format} = require('./constants');
const projectRoot = path.join(__dirname, '..');

function compileJS(src, dest) {
	console.debug(`${path.relative(projectRoot, src)}\n -> ${path.relative(projectRoot, dest)}`);
	const options = {
		entry: src,
		plugins: [
			builtins(),
			nodeResolve({extensions: ['.mjs', '.js', '.json']}),
			commonjs()
		]
	};
	if (watch) {
		options.dest = dest;
		options.format = format;
		const watcher = rollupWatch(rollup, options);
		watcher.on('event', (event) => {
			console.info(event.code, src);
			if (event.error) {
				console.error(event.error.stack);
			}
		});
		return Promise.resolve(watcher);
	}
	return rollup.rollup(options)
	.then((bundle) => {
		const {code: esCode} = bundle.generate({format: format});
		const {code: transpiledCode} = babel.transform(esCode, {presets: ['latest']});
		return writeFile(dest, transpiledCode);
	});
}

module.exports = compileJS;

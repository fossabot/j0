const path = require('path');
const rollup = require('rollup');
const rollupWatch = require('rollup-watch');
const globImport = require('rollup-plugin-glob-import');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('babel-core');
const console = require('j1/console').create('compileJS');
const writeFile = require('j1/writeFile');
const fileSize = require('j1/fileSize');

const {
	watch,
	format,
	quiet
} = require('./constants');
const projectRoot = path.join(__dirname, '..');

function minify(src) {
	return {
		transformBundle: (code) => {
			const {code: babeledCode} = babel.transform(code, {presets: ['latest']});
			if (!quiet) {
				console.debug(`${src}\n${[
					code.length,
					babeledCode.length
				].map(fileSize).join(' -> ')}`);
			}
			return babeledCode;
		}
	};
}

function compileJS(src, dest) {
	if (!quiet) {
		console.debug(`${path.relative(projectRoot, src)}\n -> ${path.relative(projectRoot, dest)}`);
	}
	const options = {
		entry: src,
		plugins: [
			globImport(),
			nodeResolve({extensions: ['.mjs', '.js', '.json']}),
			commonjs(),
			minify(src)
		]
	};
	if (watch) {
		options.dest = dest;
		options.format = format;
		const watcher = rollupWatch(rollup, options);
		watcher.on('event', (event) => {
			if (!quiet) {
				console.info(event.code, src);
			}
			if (event.error) {
				console.error(`@${src}`);
				console.error(event.error.stack);
			}
		});
		return Promise.resolve(watcher);
	}
	return rollup.rollup(options)
	.then((bundle) => {
		const {code} = bundle.generate({format: format});
		return writeFile(dest, code);
	})
	.catch((error) => {
		console.error(src);
		throw error;
	});
}

module.exports = compileJS;

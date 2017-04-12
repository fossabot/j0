const path = require('path');
const rollup = require('rollup');
const rollupWatch = require('rollup-watch');
const globImport = require('rollup-plugin-glob-import');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('babel-core');
const console = require('j1/console').create('transpileJS');
const writeFile = require('j1/writeFile');

const {
	projectRoot,
	format,
	serverMode
} = require('../constants');

function minify() {
	return {
		transformBundle: function (code) {
			const {code: babeledCode} = babel.transform(code, {presets: ['latest']});
			return babeledCode;
		}
	};
}

async function transpileJS(scriptPath, destPath) {
	const relativeScriptPath = path.relative(projectRoot, scriptPath);
	const options = {
		entry: scriptPath,
		plugins: [
			globImport(),
			nodeResolve({extensions: ['.mjs', '.js', '.json']}),
			commonjs(),
			minify()
		]
	};
	if (serverMode) {
		options.dest = destPath;
		options.format = format;
		const watcher = rollupWatch(rollup, options);
		watcher.on('event', function (event) {
			if (event.error) {
				console.error(`Failed to transpile ${relativeScriptPath}`);
				console.error(event.error.stack);
			}
		});
		return Promise.resolve(watcher);
	}
	const bundle = await rollup.rollup(options);
	const {code} = bundle.generate({format: format});
	return writeFile(destPath, code);
}

module.exports = transpileJS;

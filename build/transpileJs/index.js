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
		return new Promise((resolve, reject) => {
			let count = 0;
			watcher.on('event', function ({code, error}) {
				if (0 < count) {
					if (error) {
						console.error(`Failed to transpile ${relativeScriptPath}`);
						console.error(error.stack);
					}
				} else if (error) {
					reject(error);
				} else if (code === 'BUILD_END') {
					resolve();
					count += 1;
				}
			});
		});
	}
	const bundle = await rollup.rollup(options);
	const {code} = bundle.generate({format: format});
	return writeFile(destPath, code);
}

module.exports = transpileJS;

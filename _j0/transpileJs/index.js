const path = require('path');
const rollup = require('rollup');
const rollupWatch = require('rollup-watch');
const globImport = require('rollup-plugin-glob-import');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const j0 = require('../rollup');
const babel = require('babel-core');
const console = require('j1/console').create('transpileJS');
const writeFile = require('j1/writeFile');

const {
	projectRoot,
	format,
	serverMode
} = require('../constants');

function transpile() {
	return {
		transformBundle: function (code) {
			const {code: babeledCode} = babel.transform(code, {presets: ['env']});
			const wrappedCode = `(function(){\n${babeledCode}\n}())`;
			return wrappedCode;
		}
	};
}

async function transpileJS(scriptPath, destPath) {
	const relativeScriptPath = path.relative(projectRoot, scriptPath);
	const options = {
		entry: scriptPath,
		plugins: [
			j0(),
			globImport(),
			nodeResolve(),
			commonjs(),
			transpile()
		]
	};
	if (destPath && serverMode) {
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
	try {
		const bundle = await rollup.rollup(options);
		const {code} = bundle.generate({format: format});
		return destPath ? writeFile(destPath, code) : code;
	} catch (error) {
		console.error(`Failed to transpile ${scriptPath}`);
		throw error;
	}
}

module.exports = transpileJS;

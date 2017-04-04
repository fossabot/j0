const path = require('path');
const rollup = require('rollup');
const rollupWatch = require('rollup-watch');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('babel-core');
const console = require('j1/console').create('compileJS');
const writeFile = require('j1/writeFile');
const fileSize = require('j1/fileSize');
const changeExt = require('j1/changeExt');
const glob = require('glob');

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

function globImport() {
	const codes = {};
	return {
		resolveId: (importee, importer = '') => {
			if (importee.indexOf('*') < 0) {
				return null;
			}
			const fromDir = path.dirname(importer);
			const files = [
				...glob.sync(path.join(fromDir, importee)),
				...glob.sync(path.join(fromDir, changeExt(importee, '.js')))
			]
			.map((file) => {
				return changeExt(file, '');
			})
			.filter((value, index, list) => {
				return list.indexOf(value) === index;
			});
			const name = importee
			.split(path.sep)
			.join('_')
			.replace(/[*.]/g, 'x');
			const id = path.join(fromDir, name);
			const code = files.map((file) => {
				return `import './${path.relative(fromDir, file)}'`;
			}).join('\n');
			codes[id] = code;
			return id;
		},
		load: (id) => {
			return codes[id];
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
	});
}

module.exports = compileJS;

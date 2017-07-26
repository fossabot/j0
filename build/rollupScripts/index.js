const path = require('path');
const {rollup} = require('rollup');
const console = require('j1/console').create('rollupScripts');
const promisify = require('j1/promisify');
const writeFile = require('j1/writeFile');
const globImport = require('rollup-plugin-glob-import');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const j0 = require('../../rollup');
const babel = require('babel-core');
const glob = promisify(require('glob'));
const {
	docsDir
} = require('../constants');

async function rollupScripts() {
	const pattern = path.join(docsDir, '**', '*.rollup.js');
	console.info('search files to rollup', pattern);
	const files = await glob(pattern, {nodir: true});
	console.info(`found ${files.length} files`);
	for (const entry of files) {
		const $console = console.create(`rollupScripts:${path.relative(docsDir, entry)}`);
		$console.info('rollup');
		const bundle = await rollup({
			entry,
			plugins: [
				j0(),
				globImport()
			]
		});
		$console.info('generate');
		const {code} = await bundle.generate({format: 'es'});
		$console.log(bundle.modules.length);
		$console.info('transpile');
		const {code: babeledCode} = babel.transform(code, {presets: ['env']});
		const wrappedCode = `(function(){\n${babeledCode}\n}())`;
		const dest = entry.replace(/\.rollup\.js/, '.js');
		$console.info(`write to ${dest}`);
		await writeFile(dest, wrappedCode);
		$console.info('done');
	}
	console.info('done');
}

module.exports = rollupScripts;

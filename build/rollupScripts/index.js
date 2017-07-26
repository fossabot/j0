const path = require('path');
const {rollup} = require('rollup');
const console = require('j1/console').create('rollupScripts');
const promisify = require('j1/promisify');
const writeFile = require('j1/writeFile');
const globImport = require('rollup-plugin-glob-import');
const commonjs = require('rollup-plugin-commonjs');
const j0 = require('../..');
const babel = require('babel-core');
const glob = promisify(require('glob'));
const {
	projectDir,
	docsDir
} = require('../constants');
const dependenciesList = new Map();

async function rollupScript(entry) {
	const $console = console.create(`rollupScripts:${path.relative(docsDir, entry)}`);
	$console.info('rollup');
	const bundle = await rollup({
		entry,
		plugins: [
			j0(),
			globImport(),
			commonjs()
		]
	});
	$console.info('generate');
	const {code} = await bundle.generate({format: 'es'});
	$console.info(`dependencies: ${bundle.modules.length}`);
	dependenciesList.set(entry, new Set(
		bundle.modules.map(({id}) => {
			return id;
		})
	));
	$console.info('transpile');
	const {code: babeledCode} = babel.transform(code, {presets: ['env']});
	const wrappedCode = `(function(){\n${babeledCode}\n}())`;
	const dest = entry.replace(/\.rollup\.js/, '.js');
	$console.info(`write to ${path.relative(projectDir, dest)}`);
	await writeFile(dest, wrappedCode);
	$console.info('done');
}

async function rollupScripts(updatedFile) {
	const files = [];
	if (updatedFile) {
		console.info(`search files dependent on ${updatedFile}`);
		for (const [entry, dependencies] of dependenciesList) {
			if (dependencies.has(updatedFile)) {
				console.info(entry);
				files.push(entry);
			}
		}
	} else {
		const pattern = path.join(docsDir, '**', '*.rollup.js');
		console.info(`search files to rollup (${pattern})`);
		files.push(...(await glob(pattern, {nodir: true})));
	}
	console.info(`rollup ${files.length} files`);
	for (const entry of files) {
		await rollupScript(entry);
	}
	console.info('done');
}

module.exports = rollupScripts;

if (!module.parent) {
	rollupScripts()
	.catch((error) => {
		console.onError(error);
		process.exit(1);
	});
}

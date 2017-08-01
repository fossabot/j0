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
	docsDir
} = require('../constants');
const dependenciesList = new Map();

async function rollupScript(entry, $console) {
	$console.info('rollup');
	const bundle = await rollup({
		entry,
		plugins: [
			j0(),
			globImport(),
			commonjs()
		]
	});
	$console.info(`dependencies: ${bundle.modules.length}`);
	dependenciesList.set(entry, new Set(
		bundle.modules
		.map(({id}) => {
			return id;
		})
	));
	$console.info('generate');
	const {code} = await bundle.generate({format: 'es'});
	return code;
}

async function transpileScript(code) {
	const {code: babeledCode} = babel.transform(code, {presets: ['env']});
	return `(function(){\n${babeledCode}\n}());`;
}

async function compileScript(entry) {
	const $console = console.create(`compileScript:${path.relative(docsDir, entry)}`);
	const dest = entry.replace(/\.rollup\.js/, '.js');
	let code = await rollupScript(entry, $console);
	$console.info('transpile');
	code = await transpileScript(code)
	await writeFile(dest, code);
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
		await compileScript(entry);
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

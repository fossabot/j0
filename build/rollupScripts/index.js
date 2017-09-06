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

async function rollupScript(input, $console) {
	$console.info('rollup');
	const bundle = await rollup({
		input,
		plugins: [
			j0(),
			globImport(),
			commonjs()
		]
	});
	$console.info(`dependencies: ${bundle.modules.length}`);
	dependenciesList.set(input, new Set(
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

async function compileScript(input) {
	const $console = console.create(`compileScript:${path.relative(docsDir, input)}`);
	const dest = input.replace(/\.rollup\.js/, '.js');
	let code = await rollupScript(input, $console);
	$console.info('transpile');
	code = await transpileScript(code)
	await writeFile(dest, code);
	$console.info('done');
}

async function rollupScripts(updatedFile, target = '*.rollup.js') {
	const files = [];
	if (updatedFile) {
		console.info(`search files dependent on ${updatedFile}`);
		for (const [input, dependencies] of dependenciesList) {
			if (dependencies.has(updatedFile)) {
				console.info(input);
				files.push(input);
			}
		}
	} else {
		const pattern = path.join(docsDir, '**', target);
		console.info(`search files to rollup (${pattern})`);
		files.push(...(await glob(pattern, {nodir: true})));
	}
	console.info(`rollup ${files.length} files`);
	for (const input of files) {
		await compileScript(input);
	}
	console.info('done');
}

module.exports = rollupScripts;

if (!module.parent) {
	rollupScripts(
		null,
		process.argv.includes('--target') &&
		process.argv[process.argv.indexOf('--target') + 1]
	)
	.catch((error) => {
		console.onError(error);
		process.exit(1);
	});
}

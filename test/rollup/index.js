const assert = require('assert');
const path = require('path');
const rollup = require('rollup');
const vm = require('vm');
const j0 = require('../..');
const console = require('j1/console').create('rollupPluginTest');

async function testRollupPlugin() {
	console.info('start');
	const bundle = await rollup.rollup({
		entry: path.join(__dirname, 'src', 'index.js'),
		plugins: [
			j0({
				fromName: 'rollupPluginTest',
				directories: [
					path.join(__dirname, 'src', 'modules')
				]
			})
		]
	});
	console.info('generate');
	const {code} = await bundle.generate({format: 'es'});
	console.info('run the code');
	const context = {window: {}};
	vm.runInNewContext(code, context);
	assert.equal(context.window.hello, 'hello');
	console.info('done');
}

module.exports = testRollupPlugin;

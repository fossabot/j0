const console = require('j1/console').create('build');
const copyStaticFilesForTest = require('./copyStaticFilesForTest');
const rollupScripts = require('./rollupScripts');
const generatePolyfill = require('./generatePolyfill');

async function build() {
	await rollupScripts();
	await copyStaticFilesForTest();
	await generatePolyfill();
}

module.exports = build;

if (!module.parent) {
	build()
	.catch(console.onError);
}

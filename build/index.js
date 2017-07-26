const console = require('j1/console').create('build');
const copyStaticFilesForTest = require('./copyStaticFilesForTest');
const rollupScripts = require('./rollupScripts');

async function build() {
	await rollupScripts();
	await copyStaticFilesForTest();
}

module.exports = build;

if (!module.parent) {
	build()
	.catch(console.onError);
}

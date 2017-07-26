const console = require('j1/console').create('build');
const copyStaticFilesForTest = require('./copyStaticFilesForTest');

async function build() {
	await copyStaticFilesForTest();
}

module.exports = build;

if (!module.parent) {
	build()
	.catch(console.onError);
}

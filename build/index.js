const console = require('j1/console').create('build');
const copyStaticFilesForTest = require('./copyStaticFilesForTest');
const rollupScripts = require('./rollupScripts');
const copyDependencies = require('./copyDependencies');

async function build() {
	await copyDependencies();
	await rollupScripts();
	await copyStaticFilesForTest();
}

module.exports = build;

if (!module.parent) {
	build()
	.catch((error) => {
		console.onError(error);
		process.exit(1);
	});
}

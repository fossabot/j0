const path = require('path');
const chokidar = require('chokidar');
const SableServer = require('sable');
const console = require('j1/console').create('build');
const copyStaticFilesForTest = require('./copyStaticFilesForTest');
const rollupScripts = require('./rollupScripts');
const copyDependencies = require('./copyDependencies');
const generatePolyfill = require('./generatePolyfill');
const {
	watch,
	libDir,
	docsDir
} = require('./constants');

async function build() {
	await copyDependencies();
	await rollupScripts();
	await copyStaticFilesForTest();
	await generatePolyfill();
}

module.exports = build;

if (!module.parent) {
	build()
	.then(async () => {
		if (watch) {
			await new SableServer({
				documentRoot: docsDir
			})
			.start();
			chokidar.watch(libDir, {
				awaitWriteFinish: {
					stabilityThreshold: 100
				}
			})
			.on('change', function (file) {
				switch (path.extname(file)) {
				case '.js':
					rollupScripts(file).catch(console.onError);
					break;
				default:
					copyStaticFilesForTest().catch(console.onError);
				}
			});
		}
	})
	.catch((error) => {
		console.onError(error);
		process.exit(1);
	});
}

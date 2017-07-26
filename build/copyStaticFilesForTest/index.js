const path = require('path');
const console = require('j1/console').create('copyStaticFilesForTest');
const promisify = require('j1/promisify');
const cp = require('j1/cp');
const glob = promisify(require('glob'));
const {
	docsDir,
	libDir
} = require('../constants');

async function copyStaticFilesForTest() {
	const pattern = path.join(libDir, '**', 'test', '*.!(js)');
	console.info('search static files for test');
	const files = await glob(pattern, {nodir: true});
	console.info(`found ${files.length} files`);
	for (const file of files) {
		const dest = path.join(
			docsDir,
			path.relative(
				libDir,
				path.join(path.dirname(file), '..', path.basename(file))
			)
		);
		await cp(file, dest);
	}
	console.info('done');
}

module.exports = copyStaticFilesForTest;

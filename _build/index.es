const path = require('path');
const console = require('j1/console').create('test/build');
const promisify = require('j1/promisify');
const changeExt = require('j1/changeExt');
const glob = promisify(require('glob'));
const {config: {specs, exclude}} = require('../wdio.conf');

const transpile = require('./transpile.mjs');

Promise.all(specs.map((pattern) => {
	return glob(changeExt(pattern, '.es'), {
		nodir: true,
		ignore: exclude
	});
}))
.then((files) => {
	const esFiles = [].concat(...files).filter((file) => {
		return path.extname(file) === '.es';
	});
	return Promise.all(esFiles.map(transpile));
})
.catch(console.onError);

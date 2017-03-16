const path = require('path');
const console = require('j1/console').create('buildModule');

const {exts, ignore, src, dest} = require('./constants');
const transpile = require('./transpile');
const processes = {};

function buildModule(file) {
	if (exts.includes(path.extname(file)) && !ignore.test(file)) {
		const dir = path.relative(src, file.replace(/\/(?:index|test).*$/, ''));
		const scriptPath = path.join(src, dir, 'test', 'index.js');
		const destPath = path.join(dest, dir, 'index.test.js');
		if (!processes[dir]) {
			processes[dir] = transpile(scriptPath, destPath)
			.catch(console.onError)
			.then(() => {
				delete processes[dir];
			});
		}
		return processes[dir];
	} else if (this && this.unwatch) {
		this.unwatch(file);
	}
	return null;
}

module.exports = buildModule;

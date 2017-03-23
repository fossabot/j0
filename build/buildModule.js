const path = require('path');
const console = require('j1/console').create('buildModule');

const {exts, ignore, src, dest} = require('./constants');
const compileJS = require('./compileJS');
const processes = {};

function buildModule(file) {
	if (file.endsWith('index.mjs') && exts.includes(path.extname(file)) && !ignore.test(file)) {
		const dir = path.relative(src, file.replace(/\/index.*$/, ''));
		const scriptPath = path.join(src, dir, 'test', 'index.js');
		const destPath = path.join(dest, dir, 'index.test.js');
		if (!processes[dir]) {
			processes[dir] = compileJS(scriptPath, destPath)
			.catch(console.onError)
			.then(() => {
				delete processes[dir];
			});
		}
		return processes[dir];
	}
	return null;
}

module.exports = buildModule;

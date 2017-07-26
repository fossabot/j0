const path = require('path');
const fs = require('fs');
const promisify = require('j1/promisify');
const cp = require('j1/cp');
const rm = require('j1/rm');
const readdir = promisify(fs.readdir, fs);
const stat = promisify(fs.stat, fs);
const ignored = new Set([
	'node_modules'
]);
Promise.resolve()
.then(async () => {
	for (const name of await readdir(__dirname)) {
		if (/^[a-zA-Z0-9]\w+$/.test(name) && !ignored.has(name)) {
			const dir = path.join(__dirname, name);
			const stats = await stat(dir);
			if (stats.isDirectory()) {
				const destDir = path.join(__dirname, 'lib', name);
				await cp(dir, destDir);
				await rm(dir);
			}
		}
	}
})
.catch(console.error);

/* global process, __dirname, console */
const fs = require('fs');
const path = require('path');
const promisify = require('j1/promisify');
const writeFile = require('j1/writeFile');
const stat = promisify(fs.stat, fs);
const name = process.argv.pop();
const add = (dest, body) => {
	return stat(dest)
		.then(() => {
			throw new Error('File exists: ' + dest);
		})
		.catch((error) => {
			if (error.code === 'ENOENT') {
				return;
			}
			throw error;
		})
		.then(() => {
			return writeFile(dest, body);
		});
};
if (/^[\w\/]+$/.test(name)) {
	Promise.all([
		add(path.join(__dirname, '..', name + '.js'), Buffer.from('module.exports = function () {};')),
		add(path.join(__dirname, '..', 'test', name + '.js'), Buffer.from(`var assert = require('assert');
var ${path.basename(name)} = require('../../${name}');

describe('${name}', function () {

	it('should do X', function () {
		assert.equal(0, 1);
	});

});`))
	]).catch((error) => {
		console.error(error);
	});
} else {
	throw new Error('Invalid Name: ' + name);
}

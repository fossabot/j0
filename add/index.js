/* global process, __dirname, console */
const fs = require('fs');
const path = require('path');
const callbackPromise = require('../server/lib/callbackPromise');
const name = process.argv.pop();
const add = (dest, body) => {
	return callbackPromise((callback) => {
		fs.stat(dest, (error) => {
			if (error) {
				error = error.code === 'ENOENT' ? null : error;
			} else {
				error = new Error('File exists: ' + dest);
			}
			callback(error);
		});
	}).then(() => {
		return callbackPromise(function (callback) {
			fs.writeFile(dest, body, callback);
		});
	});
};
if (/^[\w]+$/.test(name)) {
	Promise.all([
		add(path.join(__dirname, '..', 'lib', name + '.js'), Buffer.from('module.exports = function () {};')),
		add(path.join(__dirname, '..', 'test', name + '.js'), Buffer.from(`var assert = require('assert');
var ${name} = require('../lib/${name}');

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

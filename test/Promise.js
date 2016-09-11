describe('Promise', function () {

	var assert = require('assert');
	var Error = require('../lib/Error');
	var Promise = require('../lib/Promise');
	var setTimeout = require('../lib/setTimeout');

	var throwError = function (error) {
		throw error || new Error('Unfortunately, it called this function');
	};

	it('should create a new instance', function () {
		assert.doesNotThrow(function () {
			/* jshint -W031 */
			new Promise(function () {});
		});
	});

	it('should support Promise.resolve', function (done) {
		Promise.resolve('Drakee').then(function (name) {
			assert.equal(name, 'Drakee');
			done();
		}).catch(throwError);
	});

	it('should support Promise.reject', function (done) {
		Promise.reject(new Error('Enchanter')).then(throwError).catch(function (error) {
			assert.equal(/Enchanter/.test(error.toString()), true);
			done();
		});
	});

	it('should handle resolution', function (done) {
		new Promise(function (resolve) {
			resolve('Evil Eye');
		}).then(function (name) {
			assert.equal(name, 'Evil Eye');
			done();
		}).catch(throwError);
	});

	it('should handle rejection', function (done) {
		new Promise(function (resolve, reject) {
			reject(new Error('Evil Clown'));
		}).then(throwError).catch(function (error) {
			assert.equal(/Evil Clown/.test(error.toString()), true);
			done();
		});
	});

	it('should handle chaining async processes', function (done) {
		new Promise(function (resolve, reject) {
			setTimeout(function () {
				reject('Evil Tree');
			}, 20);
		}).then(throwError, function (x) {
			return new Promise(function (resolve) {
				setTimeout(function () {
					resolve(x + ' has');
				}, 20);
			});
		}).then(function (x) {
			return new Promise(function (resolve) {
				setTimeout(function () {
					resolve(x + ' green skin');
				}, 20);
			});
		}).then(function (result) {
			assert.equal(result, 'Evil Tree has green skin');
			done();
		}).catch(throwError);
	});

});

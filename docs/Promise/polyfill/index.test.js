'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function onUnexpectedFullfill() {
		throw new Error('onFulfilled was called unexpectedly');
	}

	function onUnexpectedReject(error) {
		throw error || new Error('onRejected was called unexpectedly');
	}

	describe('Promise/polyfill', function () {

		it('should call onFulfilled', function () {
			var expected = 123;
			return new Promise(function (resolve) {
				resolve(expected);
			}).then(function (value) {
				assert.equal(value, expected);
			}).catch(onUnexpectedReject);
		});

		it('should call onRejected', function () {
			var expected = 123;
			return new Promise(function (resolve, reject) {
				reject(expected);
			}).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			});
		});

		it('should support chained thennables', function () {
			var expected = 32;
			return new Promise(function (resolve) {
				resolve(1);
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				assert.equal(value, expected);
			}).catch(onUnexpectedReject);
		});

		it('should call onFulfilled immediately if the promise is finished', function () {
			var expected = 123;
			var promise = new Promise(function (resolve) {
				resolve(expected);
			});
			return promise.then(function (value) {
				assert.equal(value, expected);
				return value;
			}).then(function (value2) {
				assert.equal(value2, expected);
			}).catch(onUnexpectedReject);
		});

		it('should call onFulfilled added on changing state', function () {
			var expected = 123;
			return new Promise(function (resolve) {
				resolve(expected);
			}).then(function (value) {
				assert.equal(value, expected);
				return value;
			}).then(function (value2) {
				assert.equal(value2, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return results of promises', function () {
			var expected = [1, 2, 3];
			return Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(function (results) {
				assert.deepEqual(results, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return an error of a rejected promise', function () {
			var expected = 2;
			return Promise.all([Promise.resolve(1), Promise.reject(expected), Promise.resolve(3)]).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return a result of the first promise', function () {
			var expected = 1;
			return Promise.race([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]).then(function (result) {
				assert.equal(result, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return a result of the last promise', function () {
			var expected = 3;
			return Promise.race([new Promise(function (resolve) {
				setTimeout(resolve, 100);
			}), new Promise(function (resolve) {
				setTimeout(resolve, 100);
			}), Promise.resolve(expected)]).then(function (result) {
				assert.equal(result, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return an error of the first promise', function () {
			var expected = 1;
			return Promise.race([Promise.reject(1), Promise.reject(2), Promise.resolve(3)]).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return an error of the last promise', function () {
			var expected = 3;
			return Promise.race([new Promise(function (resolve) {
				setTimeout(resolve, 100);
			}), new Promise(function (resolve) {
				setTimeout(resolve, 100);
			}), Promise.reject(3)]).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			}).catch(onUnexpectedReject);
		});
	});
});

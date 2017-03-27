import Promise from '..';
import Error from '../../../Error';
import setTimeout from '../../../setTimeout';

function onUnexpectedFullfill(done) {
	return function () {
		done(new Error('onFulfilled was called unexpectedly'));
	};
}

function onUnexpectedReject(done) {
	return function (error) {
		done(error || new Error('onRejected was called unexpectedly'));
	};
}

describe('constructor', function () {
	it('should call onFulfilled', function (done) {
		const expected = 123;
		new Promise(function (resolve) {
			resolve(expected);
		})
		.then(function (value) {
			assert.equal(value, expected);
			done();
		}, onUnexpectedReject(done));
	});

	it('should call onRejected', function (done) {
		const expected = 123;
		new Promise(function (resolve, reject) {
			reject(expected);
		})
		.then(onUnexpectedFullfill(done), function (error) {
			assert.equal(error, expected);
			done();
		});
	});

	it('should support chained thennables', function (done) {
		const expected = 32;
		new Promise(function (resolve) {
			resolve(1);
		})
		.then(function (value) {
			return value * 2;
		})
		.then(function (value) {
			return value * 2;
		})
		.then(function (value) {
			return value * 2;
		})
		.then(function (value) {
			return value * 2;
		})
		.then(function (value) {
			return value * 2;
		})
		.then(function (value) {
			assert.equal(value, expected);
			done();
		})
		.catch(onUnexpectedReject(done));
	});

	it('should call onFulfilled immediately if the promise is finished', function (done) {
		const expected = 123;
		const promise = new Promise(function (resolve) {
			resolve(expected);
		});
		promise.then(function (value) {
			assert.equal(value, expected);
			promise
			.then(function (value2) {
				assert.equal(value2, expected);
				done();
			})
			.catch(onUnexpectedReject(done));
			return value;
		})
		.catch(onUnexpectedReject(done));
	});

	it('should call onFulfilled added on changing state', function (done) {
		const expected = 123;
		const promise = new Promise(function (resolve) {
			resolve(expected);
		})
		.then(function (value) {
			assert.equal(value, expected);
			promise
			.then(function (value2) {
				assert.equal(value2, expected);
				done();
			})
			.catch(onUnexpectedReject(done));
			return value;
		})
		.catch(onUnexpectedReject(done));
	});
});

describe('all', function () {
	it('should return results of promises', function (done) {
		const expected = [1, 2, 3];
		Promise.all([
			Promise.resolve(1),
			Promise.resolve(2),
			Promise.resolve(3)
		])
		.then(function (results) {
			assert.deepEqual(results, expected);
			done();
		})
		.catch(onUnexpectedReject(done));
	});

	it('should return an error of a rejected promise', function (done) {
		const expected = 2;
		Promise.all([
			Promise.resolve(1),
			Promise.reject(2),
			Promise.resolve(3)
		])
		.then(
			onUnexpectedFullfill(done),
			function (error) {
				assert.equal(error, expected);
				done();
			}
		)
		.catch(onUnexpectedReject(done));
	});
});

describe('race', function () {
	it('should return a result of the first promise', function (done) {
		const expected = 1;
		Promise.race([
			Promise.resolve(1),
			Promise.reject(2),
			Promise.resolve(3)
		])
		.then(function (result) {
			assert.equal(result, expected);
			done();
		})
		.catch(onUnexpectedReject(done));
	});

	it('should return a result of the last promise', function (done) {
		const expected = 3;
		Promise.race([
			new Promise(function (resolve) {
				setTimeout(resolve, 100);
			}),
			new Promise(function (resolve) {
				setTimeout(resolve, 100);
			}),
			Promise.resolve(3)
		])
		.then(function (result) {
			assert.equal(result, expected);
			done();
		})
		.catch(onUnexpectedReject(done));
	});

	it('should return an error of the first promise', function (done) {
		const expected = 1;
		Promise.race([
			Promise.reject(1),
			Promise.reject(2),
			Promise.resolve(3)
		])
		.then(
			onUnexpectedFullfill(done),
			function (error) {
				assert.equal(error, expected);
				done();
			}
		)
		.catch(onUnexpectedReject(done));
	});

	it('should return an error of the last promise', function (done) {
		const expected = 3;
		Promise.race([
			new Promise(function (resolve) {
				setTimeout(resolve, 100);
			}),
			new Promise(function (resolve) {
				setTimeout(resolve, 100);
			}),
			Promise.reject(3)
		])
		.then(
			onUnexpectedFullfill(done),
			function (error) {
				assert.equal(error, expected);
				done();
			}
		)
		.catch(onUnexpectedReject(done));
	});
});

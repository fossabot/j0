import Promise from '..';
import Error from '../../../Error';

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

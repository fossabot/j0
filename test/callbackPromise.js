var assert = require('assert');
var callbackPromise = require('../lib/callbackPromise');
var Error = require('../lib/Error');

describe('callbackPromise', function () {

	it('should be then-able', function (done) {
		callbackPromise(function (callback) {
			callback(null, 'Ramada');
		}).then(function (data) {
			assert.equal(data, 'Ramada');
			done();
		}).catch(done);
	});

	it('should be catch-able', function (done) {
		callbackPromise(function (callback) {
			callback('Rogue Armor');
		}).then(function () {
			done(new Error('Called unexpectedly'));
		}).catch(function (data) {
			assert.equal(data, 'Rogue Armor');
			done();
		});
	});

});

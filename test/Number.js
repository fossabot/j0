var assert = require('assert');
var Number = require('../lib/Number');
var isFunction = require('../lib/isFunction');

describe('Number', function () {

	it('should have isFinite', function () {
		assert.equal(isFunction(Number.isFinite), true);
	});

	it('should have isNaN', function () {
		assert.equal(isFunction(Number.isNaN), true);
	});

});

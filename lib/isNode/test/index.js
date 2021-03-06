import isNode from '../index.js';

describe('isNode', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isNode(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isNode(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isNode(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isNode(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isNode('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isNode({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isNode([]), false);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isNode(function () {}), false);
	});

});

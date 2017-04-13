(function(){
'use strict';

function arrayOf() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return args;
}

describe('Array/of', function () {

	it('should create an array', function () {
		var actual = arrayOf(1, 2, 3);
		var expected = [1, 2, 3];
		assert.deepEqual(actual, expected);
	});
});
}())

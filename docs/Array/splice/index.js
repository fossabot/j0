(function(){
'use strict';

function splice(array) {
	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	return array.splice.apply(array, args);
}

describe('Array/splice', function () {

	it('should remove items from an array', function () {
		var array = [1, 2, 3, 4, 5];
		splice(array, 1, 2);
		assert.deepEqual(array, [1, 4, 5]);
	});
});
}())

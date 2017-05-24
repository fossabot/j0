(function(){
'use strict';

var Array = window.Array;

var arrayPush = Array.prototype.push;

function push(arrayLike) {
	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	return arrayPush.apply(arrayLike, args);
}

describe('Array/push', function () {

	it('should append an item to an array', function () {
		var item = 3;
		var array = [0, 1, 2];
		var expected = [0, 1, 2, 3];
		push(array, item);
		assert.deepEqual(array, expected);
	});

	it('should append 3 items to an array', function () {
		var items = [3, 4, 5];
		var array = [0, 1, 2];
		var expected = [0, 1, 2, 3, 4, 5];
		push.apply(undefined, [array].concat(items));
		assert.deepEqual(array, expected);
	});

	it('should append an item to an array-like object', function () {
		var item = 3;
		var array = {
			0: 0,
			1: 1,
			2: 2,
			length: 3
		};
		push(array, item);
		assert.deepEqual(array, {
			0: 0,
			1: 1,
			2: 2,
			3: 3,
			length: 4
		});
	});

	it('should append 3 items to an array-like object', function () {
		var items = [3, 4, 5];
		var array = {
			0: 0,
			1: 1,
			2: 2,
			length: 3
		};
		push.apply(undefined, [array].concat(items));
		assert.deepEqual(array, {
			0: 0,
			1: 1,
			2: 2,
			3: 3,
			4: 4,
			5: 5,
			length: 6
		});
	});
});
}())

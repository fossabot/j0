(function(){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function isUndefined(x) {
	return typeof x === 'undefined';
}

var _window = window,
    TypeError = _window.TypeError;


function shift(arrayLike) {
	if (arrayLike.shift) {
		return arrayLike.shift();
	} else if (!isUndefined(arrayLike.length)) {
		var _arrayLike = _slicedToArray(arrayLike, 1),
		    returnValue = _arrayLike[0];

		var length = arrayLike.length;

		for (var i = 0; i < length; i += 1) {
			arrayLike[i] = arrayLike[i + 1];
		}
		delete arrayLike[length - 1];
		arrayLike.length = length - 1;
		return returnValue;
	}
	throw new TypeError('The object is not shift-able');
}

describe('Array/shift', function () {

	it('should remove the first item of an array', function () {
		var array = [1, 2, 3, 4];
		var expected1 = 1;
		var expected2 = [2, 3, 4];
		assert.equal(shift(array), expected1);
		assert.deepEqual(array, expected2);
	});

	it('should remove the first item of an array-like object', function () {
		var array = {
			0: 1,
			1: 2,
			2: 3,
			3: 4,
			length: 4
		};
		var expected1 = 1;
		var expected2 = {
			0: 2,
			1: 3,
			2: 4,
			length: 3
		};
		assert.equal(shift(array), expected1);
		assert.deepEqual(array, expected2);
	});
});
}())

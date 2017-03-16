'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var suffixes = ['th', 'st', 'nd', 'rd'];
var TEN = 10;
var HUNDRED = 100;

function getOrdinalSuffix(n) {
	var type = n % TEN;
	var r2 = n % HUNDRED;
	if (10 < r2 && r2 < 20 || 3 < type) {
		type = 0;
	}
	return suffixes[type];
}

function toOrdinalString(n, radix) {
	var i = parseInt(n, radix);
	return '' + i + getOrdinalSuffix(i);
}

var tests = [[0, '0th'], [1, '1st'], [2, '2nd'], [3, '3rd'], [4, '4th'], [5, '5th'], [6, '6th'], [7, '7th'], [8, '8th'], [9, '9th'], [10, '10th'], [11, '11th'], [12, '12th'], [13, '13th'], [14, '14th'], [15, '15th'], [16, '16th'], [17, '17th'], [18, '18th'], [19, '19th'], [20, '20th'], [121, '121st'], [122, '122nd'], [123, '123rd'], [124, '124th']];

describe('toOrdinalString', function () {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		var _loop = function _loop() {
			var _step$value = _slicedToArray(_step.value, 2),
			    n = _step$value[0],
			    expected = _step$value[1];

			it('should return ' + expected + ' if the argument is ' + n, function () {
				assert.equal(toOrdinalString(n), expected);
			});
		};

		for (var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			_loop();
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
});
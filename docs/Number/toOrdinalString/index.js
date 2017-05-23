(function(){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _window = window,
    String = _window.String,
    Object = _window.Object,
    parseInt = _window.parseInt,
    ArrayBuffer = _window.ArrayBuffer,
    DataView = _window.DataView,
    location = _window.location,
    navigator = _window.navigator,
    document = _window.document,
    setTimeout = _window.setTimeout,
    clearTimeout = _window.clearTimeout,
    decodeURIComponent = _window.decodeURIComponent,
    encodeURIComponent = _window.encodeURIComponent,
    TypeError = _window.TypeError,
    Uint8Array = _window.Uint8Array,
    Uint8ClampedArray = _window.Uint8ClampedArray,
    Uint16Array = _window.Uint16Array,
    Uint32Array = _window.Uint32Array,
    Int8Array = _window.Int8Array,
    Int16Array = _window.Int16Array,
    Int32Array = _window.Int32Array,
    Float32Array = _window.Float32Array,
    Float64Array = _window.Float64Array;


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

describe('Number/toOrdinalString', function () {

	var tests = [[0, '0th'], [1, '1st'], [2, '2nd'], [3, '3rd'], [4, '4th'], [5, '5th'], [6, '6th'], [7, '7th'], [8, '8th'], [9, '9th'], [10, '10th'], [11, '11th'], [12, '12th'], [13, '13th'], [14, '14th'], [15, '15th'], [16, '16th'], [17, '17th'], [18, '18th'], [19, '19th'], [20, '20th'], [121, '121st'], [122, '122nd'], [123, '123rd'], [124, '124th']];

	var _loop = function _loop(n, expected) {
		it('should return ' + expected + ' if the argument is ' + n, function () {
			assert.equal(toOrdinalString(n), expected);
		});
	};

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _ref = _step.value;

			var _ref2 = _slicedToArray(_ref, 2);

			var n = _ref2[0];
			var expected = _ref2[1];

			_loop(n, expected);
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
}())

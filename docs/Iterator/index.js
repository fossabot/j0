(function(){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var iteratorSymbol = Symbol.iterator;

var Iterator = function () {
	function Iterator(fn) {
		_classCallCheck(this, Iterator);

		this.next = fn;
	}

	_createClass(Iterator, [{
		key: iteratorSymbol,
		value: function value() {
			return this;
		}
	}]);

	return Iterator;
}();

describe('Iterator', function () {

	it('should return a function which returns an iterator', function () {
		var value = 0;
		var max = 5;
		var iterator = new Iterator(function () {
			return {
				value: value,
				done: max < value++
			};
		});
		var result = iterator.next();
		var results = [];
		while (!result.done) {
			results.push(result.value);
			result = iterator.next();
		}
		assert.deepEqual(results, [0, 1, 2, 3, 4, 5]);
	});

	it('should return a function which returns an iterator iterable in for-of syntax', function () {
		var value = 0;
		var max = 5;
		var iterator = new Iterator(function () {
			return {
				value: value,
				done: max < value++
			};
		});
		var results = [];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var result = _step.value;

				results.push(result);
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

		assert.deepEqual(results, [0, 1, 2, 3, 4, 5]);
	});
});
}())

(function(){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function test(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should return an iterator', function () {
			var string = '' + Date.now();
			var iterator = generator.call(string);
			var results = [];
			var index = 0;
			while (1) {
				var _iterator$next = iterator.next(),
				    value = _iterator$next.value,
				    done = _iterator$next.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, string.split(''));
		});

		it('should return an iterator which is iterable in for-of syntax', function () {
			var string = '' + Date.now();
			var iterator = generator.call(string);
			var results = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var value = _step.value;

					results.push(value);
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

			assert.deepEqual(results, string.split(''));
		});
	});
}

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

function generator() {
	var _this = this;

	var length = this.length;

	var index = 0;
	return new Iterator(function () {
		return {
			value: _this[index],
			done: length <= index++
		};
	});
}

test(generator, 'String.prototype[Symbol.iterator]#j0');

test(String.prototype[Symbol.iterator]);

function test$2(repeat) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype.repeat';


	describe(name, function () {

		it('should repeat the string for specified times', function () {
			var src = '3';
			var count = 10;
			var expected = '3333333333';
			assert.equal(repeat.call(src, count), expected);
		});
	});
}

var x = parseInt;

function repeat(c) {
	var count = x(c, 10);
	var results = [];
	for (var i = 0; i < count; i += 1) {
		results.push(this);
	}
	return results.join('');
}

test$2(repeat, 'String.prototype.repeat#j0');

test$2(String.prototype.repeat);
}())

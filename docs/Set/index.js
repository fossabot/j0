(function(){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function test(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Set.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should return an iterator', function () {
			var data = [1, 2];
			var set = new Set(data);
			var iterator = generator.call(set);
			var results = [];
			while (1) {
				var _iterator$next = iterator.next(),
				    value = _iterator$next.value,
				    done = _iterator$next.done;

				if (done) {
					break;
				}
				results.push(value);
			}
			assert.deepEqual(results, data);
		});
	});
}

function generator() {
	return this.values();
}

test(generator, 'Set.prototype[Symbol.iterator]#j0');

test(Set.prototype[Symbol.iterator]);

var iteratorSymbol = Symbol.iterator;

var Set$1 = function () {
	function Set$1(iterable) {
		_classCallCheck(this, Set$1);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var value = _step.value;

					this.add(value);
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
		}
	}

	_createClass(Set$1, [{
		key: 'clear',
		value: function clear() {
			this.data = [];
		}
	}, {
		key: 'indexOf',
		value: function indexOf(item) {
			return this.data.indexOf(item);
		}
	}, {
		key: 'has',
		value: function has(item) {
			return 0 <= this.indexOf(item);
		}
	}, {
		key: 'add',
		value: function add(item) {
			if (!this.has(item)) {
				this.data.push(item);
			}
			return this;
		}
	}, {
		key: 'delete',
		value: function _delete(item) {
			var index = this.indexOf(item);
			if (0 <= index) {
				this.data.splice(index, 1);
			}
			return 0 <= index;
		}
	}, {
		key: 'forEach',
		value: function forEach(fn, thisArg) {
			var _this = this;

			this.data.forEach(function (value) {
				fn.call(thisArg, value, value, _this);
			});
		}
	}, {
		key: 'values',
		value: function values() {
			return this.data[iteratorSymbol]();
		}
	}, {
		key: iteratorSymbol,
		value: function value() {
			return this.values();
		}
	}, {
		key: 'entries',
		value: function entries() {
			var iterator = this.values();
			return {
				next: function next() {
					var _iterator$next2 = iterator.next(),
					    value = _iterator$next2.value,
					    done = _iterator$next2.done;

					return {
						value: !done && [value, value],
						done: done
					};
				}
			};
		}
	}, {
		key: 'size',
		get: function get() {
			return this.data.length;
		}
	}]);

	return Set$1;
}();

function tests(Set, name) {

	describe(name, function () {

		it('should support constructor arguments', function () {
			var data = [1, 2, 3];
			var set = new Set(data);
			assert.equal(set.size, 3);
		});

		it('should have add()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var returnValue = set.add(4);
			assert.equal(set.size, 4);
		});

		it('should return itself', function () {
			var set = new Set();
			assert.equal(set.add(1), set);
		});

		it('should keep uniqueness', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			set.add(3);
			assert.equal(set.size, 3);
		});

		it('should return true on deleting existing item', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var returnValue = set.delete(3);
			assert.equal(set.size, 2);
			assert.equal(returnValue, true);
		});

		it('should return false on deleting existing item', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var returnValue = set.delete(4);
			assert.equal(set.size, 3);
			assert.equal(returnValue, false);
		});

		it('should have forEach()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var index = 0;
			var results = [];
			var context = {};
			set.forEach(function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				args[3] = this;
				results[index++] = args;
			}, context);
			assert.deepEqual(results, [[1, 1, set, context], [2, 2, set, context], [3, 3, set, context]]);
		});

		it('should have has()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			assert.deepEqual([set.has(3), set.has(4)], [true, false]);
		});

		it('should have values()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var iterator = set.values();
			var index = 0;
			var results = [];
			while (1) {
				var _iterator$next3 = iterator.next(),
				    value = _iterator$next3.value,
				    done = _iterator$next3.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [1, 2, 3]);
		});

		it('should have entries()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var iterator = set.entries();
			var index = 0;
			var results = [];
			while (1) {
				var _iterator$next4 = iterator.next(),
				    value = _iterator$next4.value,
				    done = _iterator$next4.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [[1, 1], [2, 2], [3, 3]]);
		});
	});
}

tests(Set$1, 'J0Set');

tests(Set, 'Set');
}())

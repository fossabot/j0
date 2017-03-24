'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isFunction(x) {
		return typeof x === 'function';
	}

	function push(arrayLike) {
		var _Array$prototype$push;

		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [arrayLike].concat(args));
	}

	function forEach(iterable, fn, thisArg) {
		var index = 0;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var value = _step.value;

				if (fn.call(thisArg, value, index, iterable)) {
					return;
				}
				index += 1;
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

	var J0Promise = function () {
		function J0Promise(fn) {
			var _this = this;

			_classCallCheck(this, J0Promise);

			this.onFulfilled = [];
			this.onRejected = [];
			try {
				fn(function (value) {
					_this.resolve(value);
				}, function (error) {
					_this.reject(error);
				});
			} catch (error) {
				this.reject(error);
			}
		}

		_createClass(J0Promise, [{
			key: 'resolve',
			value: function resolve(value) {
				var _this2 = this;

				setTimeout(function () {
					forEach(_this2.onFulfilled, function (onFulfilled) {
						onFulfilled(value);
					});
				});
			}
		}, {
			key: 'reject',
			value: function reject(error) {
				var _this3 = this;

				setTimeout(function () {
					forEach(_this3.onRejected, function (onRejected) {
						onRejected(error);
					});
				});
			}
		}, {
			key: 'then',
			value: function then(onFulfilled, onRejected) {
				var _this4 = this;

				return new J0Promise(function (onFulfilled2, onRejected2) {
					push(_this4.onFulfilled, isFunction(onFulfilled) ? function (value) {
						console.log(value);
						try {
							var value2 = onFulfilled(value);
							if (isThennable(value2)) {
								value2.then(onFulfilled2, onRejected2);
							} else {
								onFulfilled2(value2);
							}
						} catch (error2) {
							console.log(error2);
							onRejected2(error2);
						}
					} : onFulfilled2);
					push(_this4.onRejected, isFunction(onRejected) ? function (error) {
						try {
							var value2 = onRejected(error);
							if (isThennable(value2)) {
								value2.then(onFulfilled2, onRejected2);
							} else {
								onFulfilled2(value2);
							}
						} catch (error2) {
							onRejected2(error2);
						}
					} : onRejected2);
				});
			}
		}, {
			key: 'catch',
			value: function _catch(onRejected) {
				return this.then(null, onRejected);
			}
		}], [{
			key: 'resolve',
			value: function resolve(value) {
				return new J0Promise(function (onFulfilled) {
					onFulfilled(value);
				});
			}
		}, {
			key: 'reject',
			value: function reject(error) {
				return new J0Promise(function () {
					throw error;
				});
			}
		}, {
			key: 'race',
			value: function race() {}
		}, {
			key: 'all',
			value: function all() {}
		}]);

		return J0Promise;
	}();

	function isThennable(value) {
		return value && isFunction(value.then) && isFunction(value.catch);
	}

	function onUnexpectedFullfill(done) {
		return function () {
			done(new Error('onFulfilled was called unexpectedly'));
		};
	}

	function onUnexpectedReject(done) {
		return function (error) {
			done(error || new Error('onRejected was called unexpectedly'));
		};
	}

	it('should call onFulfilled', function (done) {
		var expected = 123;
		new J0Promise(function (resolve) {
			resolve(expected);
		}).then(function (value) {
			assert.equal(value, expected);
			done();
		}, onUnexpectedReject(done));
	});

	it('should call onRejected', function (done) {
		var expected = 123;
		new J0Promise(function (resolve, reject) {
			reject(expected);
		}).then(onUnexpectedFullfill(done), function (error) {
			assert.equal(error, expected);
			done();
		});
	});

	it('should support chained thennables', function (done) {
		var expected = 32;
		new J0Promise(function (resolve) {
			resolve(1);
		}).then(function (value) {
			return value * 2;
		}).then(function (value) {
			return value * 2;
		}).then(function (value) {
			return value * 2;
		}).then(function (value) {
			return value * 2;
		}).then(function (value) {
			return value * 2;
		}).then(function (value) {
			assert.equal(value, expected);
			done();
		}).catch(onUnexpectedReject(done));
	});
});

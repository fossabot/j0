'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

	function isUndefined(x) {
		return typeof x === 'undefined';
	}

	function includes(iterable, searchElement, fromIndex) {
		return Array.from(iterable).includes(searchElement, fromIndex);
	}

	function getEvents(element) {
		var j0ev = element.j0ev;

		if (isUndefined(j0ev)) {
			j0ev = {};
			element.j0ev = j0ev;
		}
		return j0ev;
	}

	function addListener(events, eventName, fn) {
		var listeners = events[eventName];
		if (isUndefined(listeners)) {
			listeners = [];
			events[eventName] = listeners;
		}
		if (!includes(listeners, fn)) {
			push(listeners, fn);
		}
	}

	function addEventListener(element, eventName, fn) {
		var events = getEvents(element);
		element.addEventListener(eventName, fn);
		addListener(events, eventName, fn);
	}

	var setImmediateAvailable = void 0;
	var firstImmediate = true;
	var immediateCount = 0;
	var tasks = {};
	var suffix = '_setImmediate';
	var _window = window,
	    setImmediateNative = _window.setImmediate;


	function setImmediatePostMessage(fn) {
		if (firstImmediate) {
			firstImmediate = false;
			addEventListener(window, 'message', function (event) {
				var _event$data$split = event.data.split(suffix),
				    _event$data$split2 = _slicedToArray(_event$data$split, 1),
				    key = _event$data$split2[0];

				var task = tasks[key];
				if (task) {
					task();
				}
				delete tasks[key];
			});
		}
		immediateCount += 1;
		postMessage('' + immediateCount + suffix, '*');
		tasks[immediateCount] = fn;
		return immediateCount;
	}

	function setImmediateTimeout(fn) {
		return setTimeout(fn);
	}

	function setImmediate(fn) {
		return setImmediateAvailable(fn);
	}

	function testImmediate(fn, onSuccess) {
		var value = 1;
		var expected = (1 + 1) * 2;
		fn(function () {
			value *= 2;
			if (value === expected) {
				onSuccess();
			}
		});
		value += 1;
	}

	setImmediateAvailable = setImmediateTimeout;
	setTimeout(function () {
		if (postMessage) {
			testImmediate(setImmediatePostMessage, function () {
				if (setImmediateAvailable !== setImmediateNative) {
					setImmediateAvailable = setImmediatePostMessage;
				}
			});
		}
		if (setImmediateNative) {
			testImmediate(setImmediateNative, function () {
				setImmediateAvailable = setImmediateNative;
			});
		}
	});

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

				setImmediate(function () {
					forEach(_this2.onFulfilled, function (onFulfilled) {
						onFulfilled(value);
					});
				});
			}
		}, {
			key: 'reject',
			value: function reject(error) {
				var _this3 = this;

				setImmediate(function () {
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
						try {
							var value2 = onFulfilled(value);
							if (isThennable(value2)) {
								value2.then(onFulfilled2, onRejected2);
							} else {
								onFulfilled2(value2);
							}
						} catch (error2) {
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

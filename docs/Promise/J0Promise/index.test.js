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

	var postMessage = window.postMessage;

	var key = Symbol('events');

	function getEventListeners(element) {
		var eventName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

		var allEvents = element[key];
		var events = void 0;
		if (!allEvents) {
			allEvents = new Map();
			element[key] = allEvents;
		}
		if (eventName) {
			events = allEvents.get(eventName);
			if (!events) {
				events = new Set();
				allEvents.set(eventName, events);
			}
			return events;
		}
		return allEvents;
	}

	function addEventListener(element, eventName, fn) {
		element.addEventListener(eventName, fn);
		getEventListeners(element, eventName).add(fn);
	}

	if (!window.immediateId) {
		window.immediateId = 0;
	}
	window.immediateId += 1;
	var setImmediateAvailable = void 0;
	var firstImmediate = true;
	var immediateCount = 0;
	var tasks = {};
	var suffix = '_setImmediate' + window.immediateId;
	var _window = window,
	    setImmediateNative = _window.setImmediate;


	function setImmediatePostMessage(fn) {
		if (firstImmediate) {
			firstImmediate = false;
			addEventListener(window, 'message', function (_ref) {
				var data = _ref.data;

				if (data.split) {
					var _data$split = data.split(suffix),
					    _data$split2 = _slicedToArray(_data$split, 1),
					    _key2 = _data$split2[0];

					var task = tasks[_key2];
					if (task) {
						task();
					}
					delete tasks[_key2];
				}
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

	var setImmediate = function setImmediate(fn) {
		return setImmediateAvailable(fn);
	};

	function noop(x) {
		return x;
	}

	var PENDING = 0;
	var RESOLVED = 1;
	var REJECTED = 2;
	var CHAINED = 3;

	var J0Promise = function () {
		function J0Promise(fn) {
			_classCallCheck(this, J0Promise);

			this.deferreds = [];
			this.state = PENDING;
			this.exec(fn);
		}

		_createClass(J0Promise, [{
			key: 'is',
			value: function is(state) {
				return this.state === state;
			}
		}, {
			key: 'exec',
			value: function exec(fn) {
				var _this = this;

				var done = false;
				var onResolve = function onResolve(value) {
					if (done) {
						return;
					}
					done = true;
					_this.resolve(value);
				};
				var onReject = function onReject(error) {
					if (done) {
						return;
					}
					done = true;
					_this.reject(error);
				};
				try {
					fn(onResolve, onReject);
				} catch (error) {
					onReject(error);
				}
			}
		}, {
			key: 'resolve',
			value: function resolve(value) {
				try {
					if (value === this) {
						throw new TypeError('A promise cannot be resolved with itself');
					}
					this.value = value;
					this.state = isThennable(value) ? CHAINED : RESOLVED;
					this.finish();
				} catch (error) {
					this.reject(error);
				}
			}
		}, {
			key: 'reject',
			value: function reject(error) {
				this.state = REJECTED;
				this.value = error;
				this.finish();
			}
		}, {
			key: 'finish',
			value: function finish() {
				var _this2 = this;

				forEach(this.deferreds, function (deferred) {
					_this2.handle(deferred);
				});
				this.deferreds = null;
			}
		}, {
			key: 'handle',
			value: function handle(deferred) {
				var self = this;
				while (self.is(CHAINED)) {
					self = self.value;
				}
				if (self.is(PENDING)) {
					push(self.deferreds, deferred);
					return;
				}
				setImmediate(function () {
					var _deferred = _slicedToArray(deferred, 3),
					    promise = _deferred[0],
					    _deferred$ = _deferred[1],
					    onResolved = _deferred$ === undefined ? null : _deferred$,
					    _deferred$2 = _deferred[2],
					    onRejected = _deferred$2 === undefined ? null : _deferred$2;

					var callback = self.is(RESOLVED) ? onResolved : onRejected;
					if (callback === null) {
						if (self.is(RESOLVED)) {
							promise.resolve(self.value);
						} else {
							promise.reject(self.value);
						}
						return;
					}
					try {
						promise.resolve(callback(self.value));
					} catch (error) {
						promise.reject(error);
					}
				});
			}
		}, {
			key: 'then',
			value: function then() {
				var onResolved = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				var onRejected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				var promise = new J0Promise(noop);
				this.handle([promise, onResolved, onRejected]);
				return promise;
			}
		}, {
			key: 'catch',
			value: function _catch(onRejected) {
				return this.then(null, onRejected);
			}
		}], [{
			key: 'resolve',
			value: function resolve(value) {
				return new J0Promise(function (onResolved) {
					onResolved(value);
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
			value: function race(promises) {
				return new J0Promise(function (resolve, reject) {
					var finished = false;
					forEach(promises, function (promise) {
						promise.then(function (result) {
							if (!finished) {
								finished = true;
								resolve(result);
							}
						}, function (error) {
							if (!finished) {
								finished = true;
								reject(error);
							}
						});
					});
				});
			}
		}, {
			key: 'all',
			value: function all(promises) {
				return new J0Promise(function (resolve, reject) {
					var results = [];
					var goal = promises.length;
					var finished = false;
					var count = 0;
					forEach(promises, function (promise, index) {
						promise.then(function (result) {
							if (!finished) {
								results[index] = result;
								count += 1;
								if (count === goal) {
									resolve(results);
								}
							}
						}, function (error) {
							finished = true;
							reject(error);
						});
					});
				});
			}
		}]);

		return J0Promise;
	}();

	function isThennable(value) {
		return value && isFunction(value.then);
	}

	function onUnexpectedFullfill() {
		throw new Error('onFulfilled was called unexpectedly');
	}

	function onUnexpectedReject(error) {
		throw error || new Error('onRejected was called unexpectedly');
	}

	describe('J0Promise', function () {

		it('should call onFulfilled', function () {
			var expected = 123;
			return new J0Promise(function (resolve) {
				resolve(expected);
			}).then(function (value) {
				assert.equal(value, expected);
			}).catch(onUnexpectedReject);
		});

		it('should call onRejected', function () {
			var expected = 123;
			return new J0Promise(function (resolve, reject) {
				reject(expected);
			}).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			});
		});

		it('should support chained thennables', function () {
			var expected = 32;
			return new J0Promise(function (resolve) {
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
			}).catch(onUnexpectedReject);
		});

		it('should call onFulfilled immediately if the promise is finished', function () {
			var expected = 123;
			var promise = new J0Promise(function (resolve) {
				resolve(expected);
			});
			return promise.then(function (value) {
				assert.equal(value, expected);
				return value;
			}).then(function (value2) {
				assert.equal(value2, expected);
			}).catch(onUnexpectedReject);
		});

		it('should call onFulfilled added on changing state', function () {
			var expected = 123;
			return new J0Promise(function (resolve) {
				resolve(expected);
			}).then(function (value) {
				assert.equal(value, expected);
				return value;
			}).then(function (value2) {
				assert.equal(value2, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return results of promises', function () {
			var expected = [1, 2, 3];
			return J0Promise.all([J0Promise.resolve(1), J0Promise.resolve(2), J0Promise.resolve(3)]).then(function (results) {
				assert.deepEqual(results, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return an error of a rejected promise', function () {
			var expected = 2;
			return J0Promise.all([J0Promise.resolve(1), J0Promise.reject(expected), J0Promise.resolve(3)]).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return a result of the first promise', function () {
			var expected = 1;
			return J0Promise.race([J0Promise.resolve(1), J0Promise.reject(2), J0Promise.resolve(3)]).then(function (result) {
				assert.equal(result, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return a result of the last promise', function () {
			var expected = 3;
			return J0Promise.race([new J0Promise(function (resolve) {
				setTimeout(resolve, 100);
			}), new J0Promise(function (resolve) {
				setTimeout(resolve, 100);
			}), J0Promise.resolve(expected)]).then(function (result) {
				assert.equal(result, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return an error of the first promise', function () {
			var expected = 1;
			return J0Promise.race([J0Promise.reject(1), J0Promise.reject(2), J0Promise.resolve(3)]).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return an error of the last promise', function () {
			var expected = 3;
			return J0Promise.race([new J0Promise(function (resolve) {
				setTimeout(resolve, 100);
			}), new J0Promise(function (resolve) {
				setTimeout(resolve, 100);
			}), J0Promise.reject(3)]).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			}).catch(onUnexpectedReject);
		});
	});
});

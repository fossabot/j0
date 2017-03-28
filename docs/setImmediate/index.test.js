'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

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
				allEvents[eventName] = events;
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

	describe('setImmediate', function () {

		it('should call the function at end of current processes', function () {
			var order = 3;
			var expected = 36;
			return new Promise(function (resolve) {
				setImmediate(function () {
					order *= order;
				});
				order += order;
				setTimeout(resolve, 50);
			}).then(function () {
				assert.equal(order, expected);
			});
		});
	});
});

'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isUndefined(x) {
		return typeof x === 'undefined';
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
		if (!listeners.includes(fn)) {
			listeners.push(fn);
		}
	}

	function addEventListener$1(element, eventName, fn) {
		var events = getEvents(element);
		element.addEventListener(eventName, fn);
		addListener(events, eventName, fn);
	}

	var immediateCount = 0;
	var tasks = {};
	var suffix = '_setImmediate';

	function setImmediate(fn) {
		immediateCount += 1;
		postMessage('' + immediateCount + suffix, '*');
		tasks[immediateCount] = fn;
		return immediateCount;
	}

	addEventListener$1(window, 'message', function (event) {
		var _event$data$split = event.data.split(suffix),
		    _event$data$split2 = _slicedToArray(_event$data$split, 1),
		    key = _event$data$split2[0];

		var fn = tasks[key];
		if (fn) {
			fn();
		}
		delete tasks[key];
	});

	it('should call the function at end of current processes', function (done) {
		var order = 3;
		var expected = 36;
		setImmediate(function () {
			order *= order;
		});
		order += order;
		setTimeout(function () {
			var error = null;
			try {
				assert.equal(order, expected);
			} catch (err) {
				error = err;
			}
			done(error);
		}, 50);
	});
});

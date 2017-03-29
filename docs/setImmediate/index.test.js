'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	// import postMessage from '../postMessage';
	// import addEventListner from '../dom/addEventListener';

	if (!window.immediateId) {
		window.immediateId = 0;
	}
	window.immediateId += 1;
	var _window = window,
	    setImmediateNative = _window.setImmediate;

	var setImmediateAvailable = void 0;
	// let firstImmediate = true;
	// let immediateCount = 0;
	// const tasks = {};
	// const suffix = `_setImmediate${window.immediateId}`;

	// function setImmediatePostMessage(fn) {
	// 	if (firstImmediate) {
	// 		firstImmediate = false;
	// 		addEventListner(window, 'message', function ({data}) {
	// 			if (data.split) {
	// 				const [key] = data.split(suffix);
	// 				const task = tasks[key];
	// 				if (task) {
	// 					task();
	// 				}
	// 				delete tasks[key];
	// 			}
	// 		});
	// 	}
	// 	immediateCount += 1;
	// 	postMessage(`${immediateCount}${suffix}`, '*');
	// 	tasks[immediateCount] = fn;
	// 	return immediateCount;
	// }

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
		// if (postMessage) {
		// 	testImmediate(setImmediatePostMessage, function () {
		// 		if (setImmediateAvailable !== setImmediateNative) {
		// 			setImmediateAvailable = setImmediatePostMessage;
		// 		}
		// 	});
		// }
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

(function(){
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var cancelAnimationFrame = window.cancelAnimationFrame;

var requestAnimationFrame = window.requestAnimationFrame;

describe('cancelAnimationFrame', function () {

	it('should cancel scheduled invocation', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
		var baseInterval;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return new Promise(function (resolve) {
							requestAnimationFrame(function (time1) {
								requestAnimationFrame(function (time2) {
									resolve(time2 - time1);
								});
							});
						});

					case 2:
						baseInterval = _context.sent;

						assert.equal(0 < baseInterval, true);
						_context.next = 6;
						return new Promise(function (resolve, reject) {
							var margin = 10;
							var timer = setTimeout(function () {
								reject(new Error('requestAnimationFrame didn\'t invoke the given function.'));
							}, baseInterval * margin);
							requestAnimationFrame(function () {
								clearTimeout(timer);
								resolve();
							});
						});

					case 6:
						_context.next = 8;
						return new Promise(function (resolve, reject) {
							var margin = 10;
							var timer = setTimeout(resolve, baseInterval * margin);
							var id = requestAnimationFrame(function () {
								clearTimeout(timer);
								reject(new Error('cancelAnimationFrame didn\'t cancel the invocation.'));
							});
							cancelAnimationFrame(id);
						});

					case 8:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	})));
});
}())

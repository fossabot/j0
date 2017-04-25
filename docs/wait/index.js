(function(){
'use strict';

var wait = function () {
	var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(duration, data) {
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return new Promise(function (resolve) {
							setTimeout(resolve, duration);
						});

					case 2:
						return _context.abrupt('return', data);

					case 3:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function wait(_x, _x2) {
		return _ref.apply(this, arguments);
	};
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('wait', function () {
	it('should return a promise and it should resolved with given data', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
		var start, data, duration, margin, actual;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						start = Date.now();
						data = start;
						duration = 100;
						margin = 0.9;
						_context2.next = 6;
						return wait(duration, data);

					case 6:
						actual = _context2.sent;

						assert.equal(actual, data);
						assert.equal(margin * duration < Date.now() - start, true);

					case 9:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	})));
});
}())

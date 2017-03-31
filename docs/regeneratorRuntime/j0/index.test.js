'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	var Context = function () {
		function Context() {
			_classCallCheck(this, Context);

			this.next = 0;
		}

		_createClass(Context, [{
			key: 'stop',
			value: function stop() {
				return this.stop;
			}
		}]);

		return Context;
	}();

	var Generator = function () {
		function Generator(fn, thisArg) {
			_classCallCheck(this, Generator);

			this.fn = fn;
			this.self = thisArg;
			this.context = new Context();
		}

		_createClass(Generator, [{
			key: 'next',
			value: function next() {
				var value = this.fn.call(this.self, this.context);
				var done = value === this.context.stop;
				return {
					value: value,
					done: done
				};
			}
		}, {
			key: 'throw',
			value: function _throw(error) {
				throw error;
			}
		}]);

		return Generator;
	}();

	function mark(fn) {
		return fn;
	}

	function wrap(fn1, fn2, thisArg) {
		return new Generator(fn1, thisArg);
	}

	var j0RegeneratorRuntime = {
		mark: mark,
		wrap: wrap
	};

	function tests(regeneratorRuntime, name) {

		describe(name, function () {

			it('should create a generator', function () {
				var _marked = [seq].map(regeneratorRuntime.mark);

				function seq(from, to) {
					var count;
					return regeneratorRuntime.wrap(function seq$(_context) {
						while (1) {
							switch (_context.prev = _context.next) {
								case 0:
									count = from;

								case 1:
									if (!(count <= to)) {
										_context.next = 7;
										break;
									}

									_context.next = 4;
									return count;

								case 4:
									count += 1;
									_context.next = 1;
									break;

								case 7:
								case 'end':
									return _context.stop();
							}
						}
					}, _marked[0], this);
				}
				var iterator = seq(5, 10);
				var results = [];
				var index = 0;
				while (1) {
					var _iterator$next = iterator.next(),
					    value = _iterator$next.value,
					    done = _iterator$next.done;

					if (done) {
						break;
					}
					results[index] = value;
					index += 1;
				}
				assert.deepEqual(results, [5, 6, 7, 8, 9, 10]);
			});

			it('should support async-await', function () {
				var test = function () {
					var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(time) {
						var start;
						return regeneratorRuntime.wrap(function _callee$(_context2) {
							while (1) {
								switch (_context2.prev = _context2.next) {
									case 0:
										start = Date.now();
										_context2.next = 3;
										return wait(time);

									case 3:
										assert.equal(time / 2 < Date.now() - start, true);

									case 4:
									case 'end':
										return _context2.stop();
								}
							}
						}, _callee, this);
					}));

					return function test(_x) {
						return _ref.apply(this, arguments);
					};
				}();

				function wait(time) {
					return new Promise(function (resolve) {
						setTimeout(resolve, time);
					});
				}

				return test(50);
			});
		});
	}

	tests(j0RegeneratorRuntime, 'j0RegeneratorRuntime');
});

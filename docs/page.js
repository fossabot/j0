'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isString(x) {
		return typeof x === 'string';
	}

	var SymbolRegistry = function () {
		function SymbolRegistry() {
			_classCallCheck(this, SymbolRegistry);

			this.seed = Date.now();
			this.registry = [];
		}

		_createClass(SymbolRegistry, [{
			key: 'get',
			value: function get() {
				var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

				var symbol = 'Symbol(' + key + ')' + (this.seed + this.registry.length);
				this.registry.push([symbol, key]);
				return symbol;
			}
		}, {
			key: 'for',
			value: function _for(key) {
				if (isString(key)) {
					var length = this.registry.length;

					for (var i = 0; i < length; i += 1) {
						var item = this.registry[i];
						if (key === item[1]) {
							return item[0];
						}
					}
					return this.get(key);
				}
				throw new TypeError('Symbol.for was called with non-string: ' + key);
			}
		}, {
			key: 'keyFor',
			value: function keyFor(sym) {
				var length = this.registry.length;

				for (var i = 0; i < length; i += 1) {
					var item = this.registry[i];
					if (sym === item[0]) {
						return item[1];
					}
				}
			}
		}, {
			key: 'Symbol',
			get: function get() {
				var _this = this;

				var fn = function fn(key) {
					return _this.get(key);
				};
				function define(key, value) {
					Object.defineProperty(fn, key, { value: value });
				}
				function defineSymbol(key) {
					define(key, fn(key));
				}
				defineSymbol('iterator');
				defineSymbol('match');
				defineSymbol('replace');
				defineSymbol('search');
				defineSymbol('split');
				defineSymbol('hasInstance');
				defineSymbol('isConcatSpreadable');
				defineSymbol('unscopables');
				defineSymbol('species');
				defineSymbol('toPrimitive');
				defineSymbol('toStringTag');
				define('for', function (key) {
					return _this.for(key);
				});
				define('keyFor', function (key) {
					return _this.keyFor(key);
				});
				return fn;
			}
		}]);

		return SymbolRegistry;
	}();

	var _window = window,
	    _Symbol = _window.Symbol;


	if (typeof _Symbol !== 'function') {
		/* eslint-disable prefer-destructuring */
		_Symbol = new SymbolRegistry().Symbol;
		/* eslint-enable prefer-destructuring */
		window.Symbol = _Symbol;
	}

	var Symbol$1 = _Symbol;

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

	function every(fn, thisArg) {
		var result = true;
		forEach(this, function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			result = fn.call.apply(fn, [thisArg].concat(args));
			return !result;
		});
		return result;
	}

	function push(arrayLike) {
		var _Array$prototype$push;

		for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			args[_key2 - 1] = arguments[_key2];
		}

		return (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [arrayLike].concat(args));
	}

	function noop(x) {
		return x;
	}

	function map(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = [];
		forEach(iterable, function () {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			push(result, fn.call.apply(fn, [thisArg].concat(args)));
		});
		return result;
	}

	function from() {
		return Array.from.apply(Array, arguments);
	}

	function slice(iterable, start, end) {
		return from(iterable).slice(start, end);
	}

	function of() {
		return slice(arguments);
	}

	var toString = Object.prototype.toString;

	function isArray(x) {
		return toString.call(x) === '[object Array]';
	}

	function polyfill$1() {
		if (!Array.from) {
			Array.from = map;
		}
		if (!Array.of) {
			Array.of = of;
		}
		if (!Array.isArray) {
			Array.isArray = isArray;
		}
		if (!Array.prototype.every) {
			Array.prototype.every = every;
		}
		if (!Array.prototype[Symbol$1.iterator]) {
			Array.prototype[Symbol$1.iterator] = function () {
				var _this2 = this;

				var index = 0;
				return {
					next: function next() {
						var result = {
							value: _this2[index],
							done: !(index < _this2.length)
						};
						index += 1;
						return result;
					}
				};
			};
		}
	}

	function isNumber(x) {
		return typeof x === 'number';
	}

	function isFunction(x) {
		return typeof x === 'function';
	}

	function polyfill$2() {
		if (!Object.prototype[Symbol$1.iterator]) {
			Object.prototype[Symbol$1.iterator] = function () {
				var _this3 = this;

				if (isFunction(this.next)) {
					return {
						next: function next() {
							return _this3.next();
						}
					};
				} else if (isNumber(this.length)) {
					var index = 0;
					return {
						next: function next() {
							var result = {
								value: _this3[index],
								done: !(index < _this3.length)
							};
							index += 1;
							return result;
						}
					};
				}
				throw new TypeError('This object is not iterable');
			};
		}
	}

	polyfill$2();
	polyfill$1();

	/* global document, navigator */
	function startMocha() {
		mocha.run().once('end', function () {
			document.body.classList.add(0 < this.stats.failures ? 'failed' : 'passed');
		});
	}

	function showEnvironment() {
		var environment = document.getElementById('environment');
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = Object.keys(navigator.constructor.prototype)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var propertyName = _step2.value;

				var tr = document.createElement('tr');
				var th = document.createElement('th');
				var td = document.createElement('td');
				var value = navigator[propertyName];
				tr.appendChild(th).textContent = propertyName;
				tr.appendChild(td).textContent = value;
				environment.appendChild(tr).classList.add(typeof value === 'undefined' ? 'undefined' : _typeof(value));
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}
	}

	if (mocha) {
		startMocha();
	}
	showEnvironment();
});

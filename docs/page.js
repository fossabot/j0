'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

	function noop(x) {
		return x;
	}

	function isFunction(x) {
		return typeof x === 'function';
	}

	function getMatcher(ref) {
		return function (value) {
			return ref === value;
		};
	}

	function find(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

		var index = 0;
		if (!isFunction(fn)) {
			fn = getMatcher(fn);
		}
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var item = _step.value;

				if (fn(item, index, iterable)) {
					return item;
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
					return find(this.registry, function (_ref) {
						var _ref2 = _slicedToArray(_ref, 2),
						    symbolKey = _ref2[1];

						return key === symbolKey;
					}) || this.get(key);
				}
				throw new TypeError('Symbol.for was called with non-string: ' + key);
			}
		}, {
			key: 'keyFor',
			value: function keyFor(sym) {
				return find(this.registry, function (_ref3) {
					var _ref4 = _slicedToArray(_ref3, 1),
					    symbol = _ref4[0];

					return sym === symbol;
				});
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

	function forEach(iterable, fn) {
		var thisArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : iterable;

		var index = 0;
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var value = _step2.value;

				if (fn.call(thisArg, value, index, iterable)) {
					return;
				}
				index += 1;
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

	function polyfill$1() {
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

	function polyfill$2() {
		if (!Object.prototype[Symbol$1.iterator]) {
			Object.prototype[Symbol$1.iterator] = function () {
				var _this3 = this;

				if (isNumber(this.length)) {
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
				throw new TypeError('This object is not array-like');
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
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = Object.keys(navigator.constructor.prototype)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var propertyName = _step3.value;

				var tr = document.createElement('tr');
				var th = document.createElement('th');
				var td = document.createElement('td');
				var value = navigator[propertyName];
				tr.appendChild(th).textContent = propertyName;
				tr.appendChild(td).textContent = value;
				environment.appendChild(tr).classList.add(typeof value === 'undefined' ? 'undefined' : _typeof(value));
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}
	}

	if (mocha) {
		startMocha();
	}
	showEnvironment();
});

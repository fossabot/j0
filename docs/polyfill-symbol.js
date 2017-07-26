(function(){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var x = window;

function isString(x) {
	return typeof x === 'string';
}

var x$1 = Date;

var x$2 = TypeError;

var x$3 = Object;

var hex = 16;

var SymbolRegistry = function () {
	function SymbolRegistry() {
		_classCallCheck(this, SymbolRegistry);

		this.seed = x$1.now();
		this.registry = [];
	}

	_createClass(SymbolRegistry, [{
		key: 'get',
		value: function get() {
			var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var salt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x$1.now();

			var symbol = 'Symbol(' + key + ')' + (this.seed + this.registry.length).toString(hex);
			this.registry.push([symbol, '' + key + salt]);
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
				return this.get(key, '');
			}
			throw new x$2('Symbol.for was called with non-string: ' + key);
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
				x$3.defineProperty(fn, key, { value: value });
			}
			function defineReserved(key) {
				define(key, fn(key));
			}
			// Don't use [].forEach().
			// It may be undefined here.
			defineReserved('iterator');
			defineReserved('match');
			defineReserved('replace');
			defineReserved('search');
			defineReserved('split');
			defineReserved('hasInstance');
			defineReserved('isConcatSpreadable');
			defineReserved('unscopables');
			defineReserved('species');
			defineReserved('toPrimitive');
			defineReserved('toStringTag');
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

var J0Symbol = new SymbolRegistry().Symbol;

if (!x.Symbol) {
	x.Symbol = J0Symbol;
}
}())
(function(){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var x = encodeURIComponent;

var x$1 = Object;

function isString(x) {
	return typeof x === 'string';
}

function isInstanceOf(instance, constructor) {
	return instance instanceof constructor;
}

var State = function () {
	function State(stateInfo) {
		_classCallCheck(this, State);

		if (!isInstanceOf(stateInfo, State)) {
			var path = stateInfo.path;

			var parts = [];
			var pos = 0;
			path.replace(/\{(\w+):(.*?)\}/g, function (_ref, name, expression, offset, source) {
				var length = _ref.length;

				if (pos < offset) {
					parts.push(source.slice(pos, offset));
				}
				parts.push([name, new RegExp('^' + expression + '$'), expression]);
				pos = offset + length;
			});
			if (pos < path.length) {
				parts.push(path.slice(pos));
			}
			var matcher = new RegExp(parts.map(function (part) {
				if (isString(part)) {
					return part;
				}
				return '(' + part[2] + ')';
			}).join(''));
			x$1.assign(stateInfo, {
				parts: parts,
				matcher: matcher
			});
		}
		x$1.assign(this, stateInfo);
	}

	_createClass(State, [{
		key: 'compose',
		value: function compose(fn) {
			var parts = this.parts;

			var result = [];
			for (var index = 0, length = parts.length; index < length; index++) {
				var part = parts[index];
				if (isString(part)) {
					result.push(part);
				} else {
					var value = fn.apply(undefined, _toConsumableArray(part));
					if (value) {
						result.push(value);
					} else {
						return '';
					}
				}
			}
			return result.join('');
		}
	}, {
		key: 'href',
		value: function href() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			return this.compose(function (key, pattern) {
				var value = params[key];
				if (value && pattern.test(value)) {
					return x(value);
				}
			});
		}
	}, {
		key: 'parse',
		value: function parse() {
			var _this = this;

			var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

			var params = void 0;
			href.replace(this.matcher, function (match) {
				for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
					args[_key - 1] = arguments[_key];
				}

				var index = 0;
				params = {};
				return _this.compose(function (key) {
					var value = args[index++];
					params[key] = value;
					return value;
				});
			});
			return params;
		}
	}, {
		key: 'instantiate',
		value: function instantiate() {
			var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			var params = isString(src) ? this.parse(src) : src;
			var href = this.href(params);
			if (href) {
				var state = new State(this);
				state.params = params;
				state.href = href;
				return state;
			}
		}
	}]);

	return State;
}();

var hex = 16;

describe('State', function () {

	it('should return href', function () {
		var path = '/{param1:\\d+}/{param2:\\w+}';
		var state = new State({ path: path });
		var param1 = '' + Date.now();
		var param2 = '' + Date.now().toString(hex);
		var expected = '/' + param1 + '/' + param2;
		assert.equal(state.href({
			param1: param1,
			param2: param2
		}), expected);
	});

	it('should return an empty string when href() receives invalid parameters', function () {
		var path = '/{param1:\\d+}/{param2:\\w+}';
		var state = new State({ path: path });
		var param1 = Date.now() + 'a';
		var param2 = '' + Date.now().toString(hex);
		var expected = '';
		assert.equal(state.href({
			param1: param1,
			param2: param2
		}), expected);
	});

	it('should return an empty string when href() doesn\'t receive parameters', function () {
		var path = '/{param1:\\d+}/{param2:\\w+}';
		var state = new State({ path: path });
		var expected = '';
		assert.equal(state.href(), expected);
	});

	it('should clone a state', function () {
		var path = '/{param1:\\d+}/{param2:\\w+}';
		var state = new State({ path: path });
		var state2 = new State(state);
		var param1 = '' + Date.now();
		var param2 = '' + Date.now().toString(hex);
		var expected = name + '/' + param1 + '/' + param2;
		assert.equal(state !== state2, true);
		assert.equal(state2.href({
			param1: param1,
			param2: param2
		}), expected);
	});

	it('should parse href patterns', function () {
		var path = '/{param1:\\d+}/{param2:\\w+}';
		var state = new State({ path: path });
		var param1 = '' + Date.now();
		var param2 = '' + Date.now().toString(hex);
		var params = {
			param1: param1,
			param2: param2
		};
		assert.deepEqual(state.parse(state.href(params)), params);
	});

	it('should instantiate a state', function () {
		var path = '/{param1:\\d+}/{param2:\\w+}';
		var state = new State({ path: path });
		var param1 = '' + Date.now();
		var param2 = '' + Date.now().toString(hex);
		var params = {
			param1: param1,
			param2: param2
		};
		var instantiated = state.instantiate(params);
		assert.equal(instantiated !== state, true);
		assert.equal(instantiated.href, state.href(params));
		assert.deepEqual(instantiated.params, params);
	});
});
}())

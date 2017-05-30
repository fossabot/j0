(function(){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
	function State(stateName, definition, onEnter) {
		_classCallCheck(this, State);

		if (isInstanceOf(stateName, State)) {
			x$1.assign(this, stateName);
		} else {
			var parts = [];
			var pos = 0;
			definition.replace(/\{(\w+):(.*?)\}/g, function (_ref, name, expression, offset, source) {
				var length = _ref.length;

				if (pos < offset) {
					parts.push(source.slice(pos, offset));
				}
				parts.push([name, new RegExp('^' + expression + '$'), expression]);
				pos = offset + length;
			});
			parts.push(definition.slice(pos));
			var matcher = new RegExp(parts.map(function (part) {
				if (isString(part)) {
					return part;
				}
				return '(' + part[2] + ')';
			}).join(''));
			x$1.assign(this, {
				name: stateName,
				parts: parts,
				matcher: matcher,
				onEnter: onEnter
			});
		}
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
		value: function parse(href) {
			var _this = this;

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
	}]);

	return State;
}();

var hex$1 = 16;

describe('State', function () {

	it('should have a name', function () {
		var name = '' + Date.now();
		var definition = name;
		var state = new State(name, definition);
		assert.equal(state.name, name);
	});

	it('should have onEnter', function () {
		var name = '' + Date.now();
		var definition = name;
		function onEnter(params) {
			return params;
		}
		var state = new State(name, definition, onEnter);
		assert.equal(state.onEnter, onEnter);
	});

	it('should return href', function () {
		var name = '' + Date.now();
		var definition = name + '/{param1:\\d+}/{param2:\\w+}';
		function onEnter(params) {
			return params;
		}
		var state = new State(name, definition, onEnter);
		var param1 = '' + Date.now();
		var param2 = '' + Date.now().toString(hex$1);
		var expected = name + '/' + param1 + '/' + param2;
		assert.equal(state.href({
			param1: param1,
			param2: param2
		}), expected);
	});

	it('should return an empty string when href() receives invalid parameters', function () {
		var name = '' + Date.now();
		var definition = name + '/{param1:\\d+}/{param2:\\w+}';
		function onEnter(params) {
			return params;
		}
		var state = new State(name, definition, onEnter);
		var param1 = Date.now() + 'a';
		var param2 = '' + Date.now().toString(hex$1);
		var expected = '';
		assert.equal(state.href({
			param1: param1,
			param2: param2
		}), expected);
	});

	it('should return an empty string when href() doesn\'t receive parameters', function () {
		var name = '' + Date.now();
		var definition = name + '/{param1:\\d+}/{param2:\\w+}';
		function onEnter(params) {
			return params;
		}
		var state = new State(name, definition, onEnter);
		var expected = '';
		assert.equal(state.href(), expected);
	});

	it('should clone a state', function () {
		var name = '' + Date.now();
		var definition = name + '/{param1:\\d+}/{param2:\\w+}';
		function onEnter(params) {
			return params;
		}
		var state = new State(name, definition, onEnter);
		var state2 = new State(state);
		var param1 = '' + Date.now();
		var param2 = '' + Date.now().toString(hex$1);
		var expected = name + '/' + param1 + '/' + param2;
		assert.equal(state2.name, name);
		assert.equal(state2.onEnter, onEnter);
		assert.equal(state2.href({
			param1: param1,
			param2: param2
		}), expected);
	});

	it('should parse href patterns', function () {
		var name = '' + Date.now();
		var definition = name + '/{param1:\\d+}/{param2:\\w+}';
		function onEnter(params) {
			return params;
		}
		var state = new State(name, definition, onEnter);
		var param1 = '' + Date.now();
		var param2 = '' + Date.now().toString(hex$1);
		var params = {
			param1: param1,
			param2: param2
		};
		assert.deepEqual(state.parse(state.href(params)), params);
	});
});

var x$2 = Map;

var StateManager = function () {
	function StateManager(config) {
		_classCallCheck(this, StateManager);

		x$1.assign(this, { prefix: '#' }, config, {
			states: new x$2(),
			listeners: []
		});
	}

	_createClass(StateManager, [{
		key: 'define',
		value: function define(name, definition, onEnter) {
			this.states.set(name, new State(name, definition, onEnter));
			return this;
		}
	}, {
		key: 'href',
		value: function href(name, params) {
			var state = this.states.get(name);
			var href = state && state.href(params) || this.fallback;
			return '' + this.prefix + href;
		}
	}, {
		key: 'otherwise',
		value: function otherwise(name, params) {
			this.fallback = this.href(name, params);
			return this;
		}
	}, {
		key: 'start',
		value: function start() {
			var hashMode = this.prefix.charAt(0) === '#';
			console.log(hashMode);
		}
	}]);

	return StateManager;
}();

var hex = 16;

describe('StateManager', function () {

	it('should define a state', function () {
		var states = new StateManager();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		states.define(name1, 'stateA/{param1:\\d+}').define(name2, 'stateB/{param1:\\d+}/{param2:\\w+}');
		var results = [];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = states.states[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _ref2 = _step.value;

				var _ref3 = _slicedToArray(_ref2, 2);

				var state = _ref3[1];

				results.push(state);
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

		if (results[0].name === name2) {
			results.reverse();
		}
		assert.equal(results[0].name, name1);
		assert.equal(results[1].name, name2);
	});

	it('should get a href', function () {
		var states = new StateManager();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		states.define(name1, 'stateA/{param1:\\d+}').define(name2, 'stateB/{param1:\\d+}/{param2:\\w+}');
		var param1 = '' + Date.now();
		var param2 = Date.now().toString(hex);
		var expected = 'stateB/' + param1 + '/' + param2;
		assert.equal(states.href(name2, {
			param1: param1,
			param2: param2
		}), expected);
	});

	it('should define fallback and return it when href() receives invalid parameters', function () {
		var states = new StateManager();
		var name0 = Date.now() + '-0';
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		states.define(name0, name0).define(name1, 'stateA/{param1:\\d+}').define(name2, 'stateB/{param1:\\d+}/{param2:\\w+}').otherwise(name0);
		var param1 = '' + Date.now();
		assert.equal(states.href(name2, { param1: param1 }), name0);
		assert.equal(states.href(name2), name0);
	});
});
}())

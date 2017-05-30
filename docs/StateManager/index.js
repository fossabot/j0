(function(){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	}, {
		key: 'is',
		value: function is(state) {
			return this.href === state.href;
		}
	}, {
		key: 'isIn',
		value: function isIn(state) {
			return this.href.indexOf(state.href) === 0;
		}
	}, {
		key: 'isAncestorOf',
		value: function isAncestorOf(state) {
			return state.isIn(this);
		}
	}]);

	return State;
}();

var hex$1 = 16;

describe('State', function () {

	it('should return href', function () {
		var path = '/{param1:\\d+}/{param2:\\w+}';
		var state = new State({ path: path });
		var param1 = '' + Date.now();
		var param2 = '' + Date.now().toString(hex$1);
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
		var param2 = '' + Date.now().toString(hex$1);
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
		var param2 = '' + Date.now().toString(hex$1);
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
		var param2 = '' + Date.now().toString(hex$1);
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
		var param2 = '' + Date.now().toString(hex$1);
		var params = {
			param1: param1,
			param2: param2
		};
		var instance = state.instantiate(params);
		assert.equal(instance !== state, true);
		assert.equal(instance.href, state.href(params));
		assert.deepEqual(instance.params, params);
	});

	it('should return the two states are same or not', function () {
		var path = '/{param1:\\d+}';
		var state = new State({ path: path });
		var param1 = '' + Date.now();
		var param2 = '' + param1 + param1;
		var instance1 = state.instantiate({ param1: param1 });
		var instance2 = state.instantiate({ param1: param1 });
		var instance3 = state.instantiate({ param1: param2 });
		assert.equal(instance1 === instance2, false);
		assert.equal(instance1.is(instance2), true);
		assert.equal(instance1.is(instance3), false);
		assert.equal(instance2.is(instance1), true);
		assert.equal(instance2.is(instance3), false);
		assert.equal(instance3.is(instance1), false);
		assert.equal(instance3.is(instance2), false);
	});

	it('should return a state is a descendant of another state or not', function () {
		var path1 = '/{param1:\\d+}';
		var path2 = '/{param1:\\d+}/{param2:\\w+}';
		var state1 = new State({ path: path1 });
		var state2 = new State({ path: path2 });
		var param1 = '' + Date.now();
		var param2 = '' + Date.now().toString(hex$1);
		var instance1 = state1.instantiate({ param1: param1 });
		var instance2 = state2.instantiate({
			param1: param1,
			param2: param2
		});
		assert.equal(instance1.isIn(instance2), false);
		assert.equal(instance1.isAncestorOf(instance2), true);
		assert.equal(instance2.isIn(instance1), true);
		assert.equal(instance2.isAncestorOf(instance1), false);
	});
});

var x$2 = Map;

var listenersKey = Symbol();
var onceKey = Symbol();
var listenerTypeKey = Symbol();

var EventEmitter = function () {
	function EventEmitter() {
		_classCallCheck(this, EventEmitter);

		this[listenersKey] = [];
	}

	_createClass(EventEmitter, [{
		key: 'emit',
		value: function emit(type) {
			var _this2 = this;

			for (var _len2 = arguments.length, data = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				data[_key2 - 1] = arguments[_key2];
			}

			this[listenersKey].slice().forEach(function (fn) {
				if (fn[listenerTypeKey] === type) {
					fn.apply(_this2, data);
					if (fn[onceKey]) {
						_this2.off(type, fn);
					}
				}
			});
			return this;
		}
	}, {
		key: 'off',
		value: function off(type, targetFn) {
			var listeners = this[listenersKey];
			for (var index = listeners.length; index--;) {
				var fn = listeners[index];
				if (fn[listenerTypeKey] === type && (!targetFn || fn === targetFn)) {
					listeners.splice(index, 1);
				}
			}
			return this;
		}
	}, {
		key: 'on',
		value: function on(type, fn) {
			fn[listenerTypeKey] = type;
			this[listenersKey].push(fn);
			return this;
		}
	}, {
		key: 'once',
		value: function once(type, fn) {
			fn[onceKey] = true;
			return this.on(type, fn);
		}
	}]);

	return EventEmitter;
}();

function debounce(fn) {
	var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var thisArg = arguments[2];

	var timer = void 0;
	return function () {
		var _this3 = this;

		for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
			args[_key3] = arguments[_key3];
		}

		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.call.apply(fn, [thisArg || _this3].concat(args));
		}, delay);
	};
}

var x$3 = location;

var x$4 = history;

var x$5 = JSON;

var x$6 = addEventListener;

var x$7 = Boolean;

var StateManager = function (_EventEmitter) {
	_inherits(StateManager, _EventEmitter);

	function StateManager(config) {
		_classCallCheck(this, StateManager);

		var _this4 = _possibleConstructorReturn(this, (StateManager.__proto__ || Object.getPrototypeOf(StateManager)).call(this));

		x$1.assign(_this4, { prefix: '#' }, config, {
			states: new x$2(),
			listeners: []
		});
		if (!_this4.parser) {
			if (_this4.prefix.charAt(0) === '#') {
				_this4.parser = function (url) {
					return url.hash.slice(this.prefix.length);
				};
			} else {
				_this4.parser = function (url) {
					var pathname = url.pathname,
					    search = url.search,
					    hash = url.hash;

					return ('' + pathname + search + hash).slice(this.prefix.length);
				};
			}
		}
		return _this4;
	}

	_createClass(StateManager, [{
		key: 'parseURL',
		value: function parseURL() {
			var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x$3;

			var stateString = this.parser(url);
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.states[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _ref2 = _step.value;

					var _ref3 = _slicedToArray(_ref2, 2);

					var state = _ref3[1];

					var params = state.parse(stateString);
					if (params) {
						return state.instantiate(params);
					}
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

			return this.fallback;
		}
	}, {
		key: 'define',
		value: function define(stateInfo) {
			var name = stateInfo.name;

			if (isString(name) && name) {
				this.states.set(name, new State(stateInfo));
			} else {
				throw new Error('Invalid name');
			}
			return this;
		}
	}, {
		key: 'get',
		value: function get(stateInfo, noFallback) {
			var name = stateInfo.name,
			    params = stateInfo.params;

			var state = this.states.get(name);
			var instantiated = state && state.instantiate(params);
			if (instantiated) {
				instantiated.href = '' + this.prefix + instantiated.href;
			}
			return instantiated || !noFallback && this.fallback;
		}
	}, {
		key: 'href',
		value: function href(stateInfo, noFallback) {
			var state = this.get(stateInfo, noFallback);
			return state ? state.href : '';
		}
	}, {
		key: 'otherwise',
		value: function otherwise(stateInfo) {
			this.fallback = this.get(stateInfo);
			if (!this.fallback) {
				throw new Error('Failed to set fallback: ' + x$5.stringify(stateInfo) + ' is not exist.');
			}
			return this;
		}
	}, {
		key: 'is',
		value: function is(stateInfo) {
			var current = this.current;

			var state = this.get(stateInfo, true);
			return x$7(current && state && current.is(state));
		}
	}, {
		key: 'isIn',
		value: function isIn(stateInfo) {
			var current = this.current;

			var state = this.get(stateInfo, true);
			return x$7(current && state && current.isIn(state));
		}
	}, {
		key: 'isAncestorOf',
		value: function isAncestorOf(stateInfo) {
			var current = this.current;

			var state = this.get(stateInfo, true);
			return x$7(current && state && current.isAncestorOf(state));
		}
	}, {
		key: 'setCurrent',
		value: function setCurrent(stateInfo, method) {
			var newState = this.get(stateInfo);
			if (this.is(newState)) {
				return;
			}
			this.emit('change', newState, this.current);
			this.current = newState;
			x$4[method](newState.name, newState.params, newState.href);
		}
	}, {
		key: 'go',
		value: function go(stateInfo) {
			this.setCurrent(stateInfo, 'pushState');
		}
	}, {
		key: 'replace',
		value: function replace(stateInfo) {
			this.setCurrent(stateInfo, 'replaceState');
		}
	}, {
		key: 'start',
		value: function start() {
			var _this5 = this;

			var debounceDuration = 30;
			var onStateChange = debounce(function () {
				_this5.replace(_this5.parseURL());
			}, debounceDuration);
			x$6('hashchange', onStateChange);
			x$6('pushstate', onStateChange);
			x$6('popstate', onStateChange);
			onStateChange();
		}
	}]);

	return StateManager;
}(EventEmitter);

var hex = 16;
var initialState = location.pathname;

function resetState() {
	history.replaceState(null, {}, initialState);
}

describe('StateManager', function () {

	before(resetState);
	after(resetState);
	beforeEach(resetState);
	afterEach(resetState);

	it('should define a state', function () {
		var prefix = 'prefix' + Date.now() + '/';
		var states = new StateManager({ prefix: prefix });
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		states.define({
			name: name1,
			path: 'stateA/{param1:\\d+}'
		}).define({
			name: name2,
			path: 'stateB/{param1:\\d+}/{param2:\\w+}'
		});
		var results = [];
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = states.states[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var _ref4 = _step2.value;

				var _ref5 = _slicedToArray(_ref4, 2);

				var state = _ref5[1];

				results.push(state);
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

		if (results[0].name === name2) {
			results.reverse();
		}
		assert.equal(results[0].name, name1);
		assert.equal(results[1].name, name2);
	});

	it('should get a href', function () {
		var prefix = 'prefix' + Date.now() + '/';
		var states = new StateManager({ prefix: prefix });
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		states.define({
			name: name1,
			path: 'stateA/{param1:\\d+}'
		}).define({
			name: name2,
			path: 'stateB/{param1:\\d+}/{param2:\\w+}'
		});
		var param1 = '' + Date.now();
		var param2 = Date.now().toString(hex);
		var expected = prefix + 'stateB/' + param1 + '/' + param2;
		assert.equal(states.href({
			name: name2,
			params: {
				param1: param1,
				param2: param2
			}
		}), expected);
	});

	it('should define fallback and return it when href() receives invalid parameters', function () {
		var prefix = 'prefix' + Date.now() + '/';
		var states = new StateManager({ prefix: prefix });
		var name0 = Date.now() + '-defaultState';
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		states.define({
			name: name0,
			path: name0
		}).define({
			name: name1,
			path: 'stateA/{param1:\\d+}'
		}).define({
			name: name2,
			path: 'stateB/{param1:\\d+}/{param2:\\w+}'
		}).otherwise({ name: name0 });
		var param1 = '' + Date.now();
		assert.equal(states.href({
			name: name2,
			params: { param1: param1 }
		}), '' + prefix + name0);
		assert.equal(states.href({ name: name2 }), '' + prefix + name0);
	});

	it('should start management', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
		var states, name0, name1, name2, _ref7, _ref8, toState, fromState;

		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						states = new StateManager();
						name0 = Date.now() + '-defaultState';
						name1 = Date.now() + '-1';
						name2 = Date.now() + '-2';

						states.define({
							name: name0,
							path: name0
						}).define({
							name: name1,
							path: 'stateA/{param1:\\d+}'
						}).define({
							name: name2,
							path: 'stateB/{param1:\\d+}/{param2:\\w+}'
						}).otherwise({ name: name0 });
						_context.next = 7;
						return new Promise(function (resolve) {
							states.on('change', function () {
								for (var _len4 = arguments.length, data = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
									data[_key4] = arguments[_key4];
								}

								resolve(data);
							}).start();
						});

					case 7:
						_ref7 = _context.sent;
						_ref8 = _slicedToArray(_ref7, 2);
						toState = _ref8[0];
						fromState = _ref8[1];

						assert.deepEqual(toState, states.fallback);
						assert.equal(!fromState, true);

					case 13:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	})));

	it('should return whether the current state is the given state or not', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
		var states, name0, name1, name2;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						states = new StateManager();
						name0 = Date.now() + '-defaultState';
						name1 = Date.now() + '-1';
						name2 = Date.now() + '-2';

						states.define({
							name: name0,
							path: name0
						}).define({
							name: name1,
							path: 'stateA/{param1:\\d+}'
						}).define({
							name: name2,
							path: 'stateB/{param1:\\d+}/{param2:\\w+}'
						}).otherwise({ name: name0 }).start();
						_context2.next = 7;
						return new Promise(function (resolve) {
							states.once('change', resolve);
						});

					case 7:
						assert.equal(states.is({ name: name0 }), true);
						assert.equal(states.is({ name: name1 }), false);

					case 9:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	})));

	it('should go to the other state', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
		var states, name0, name1, name2, param1, params;
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						states = new StateManager();
						name0 = Date.now() + '-defaultState';
						name1 = Date.now() + '-1';
						name2 = Date.now() + '-2';

						states.define({
							name: name0,
							path: name0
						}).define({
							name: name1,
							path: 'stateA/{param1:\\d+}'
						}).define({
							name: name2,
							path: 'stateB/{param1:\\d+}/{param2:\\w+}'
						}).otherwise({ name: name0 });
						_context3.next = 7;
						return new Promise(function (resolve) {
							states.once('change', resolve).start();
						});

					case 7:
						param1 = '' + Date.now();
						params = { param1: param1 };
						_context3.next = 11;
						return new Promise(function (resolve) {
							states.once('change', resolve).go({
								name: name1,
								params: params
							});
						});

					case 11:
						assert.equal(states.current.name, name1);

					case 12:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, this);
	})));

	it('should return whether the current state is one of the given states', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
		var states, name0, name1, name2, toState0, param1, param2, params, toState1;
		return regeneratorRuntime.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						states = new StateManager();
						name0 = Date.now() + '-defaultState';
						name1 = Date.now() + '-1';
						name2 = Date.now() + '-2';

						states.define({
							name: name0,
							path: name0
						}).define({
							name: name1,
							path: '/{param1:\\d+}'
						}).define({
							name: name2,
							path: '/{param1:\\d+}/{param2:\\w+}'
						}).otherwise({ name: name0 });
						_context4.next = 7;
						return new Promise(function (resolve) {
							states.once('change', resolve).start();
						});

					case 7:
						toState0 = _context4.sent;

						assert.equal(toState0.name, name0);
						param1 = '' + Date.now();
						param2 = Date.now() + '_param2';
						params = {
							param1: param1,
							param2: param2
						};
						_context4.next = 14;
						return new Promise(function (resolve) {
							states.once('change', resolve).go({
								name: name2,
								params: params
							});
						});

					case 14:
						toState1 = _context4.sent;

						assert.equal(toState1.name, name2);
						assert.equal(states.is({
							name: name2,
							params: params
						}), true);
						assert.equal(states.isIn({
							name: name1,
							params: { param1: param1 }
						}), true);

					case 18:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, this);
	})));

	it('should detect history.back()', _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
		var states, name0, name1, name2, toState0, param1, param2, params, toState1, toState2;
		return regeneratorRuntime.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						states = new StateManager();
						name0 = Date.now() + '-defaultState';
						name1 = Date.now() + '-1';
						name2 = Date.now() + '-2';

						states.define({
							name: name0,
							path: name0
						}).define({
							name: name1,
							path: '/{param1:\\d+}'
						}).define({
							name: name2,
							path: '/{param1:\\d+}/{param2:\\w+}'
						}).otherwise({ name: name0 });
						_context5.next = 7;
						return new Promise(function (resolve) {
							states.once('change', resolve).start();
						});

					case 7:
						toState0 = _context5.sent;

						assert.equal(toState0.name, name0);
						param1 = '' + Date.now();
						param2 = Date.now() + '_param2';
						params = {
							param1: param1,
							param2: param2
						};
						_context5.next = 14;
						return new Promise(function (resolve) {
							states.once('change', resolve).go({
								name: name2,
								params: params
							});
						});

					case 14:
						toState1 = _context5.sent;

						assert.equal(toState1.name, name2);
						_context5.next = 18;
						return new Promise(function (resolve) {
							states.once('change', resolve);
							history.back();
						});

					case 18:
						toState2 = _context5.sent;

						assert.equal(toState2.name, name0);

					case 20:
					case 'end':
						return _context5.stop();
				}
			}
		}, _callee5, this);
	})));
});
}())

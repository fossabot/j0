var isFunction = require('./isFunction');
var addEventListener = require('./addEventListener');
var location = require('./location');
var encodeURI = require('./encodeURI');
var decodeURI = require('./decodeURI');
var noop = require('./noop');
var push = require('./push');
var forEachKey = require('./forEachKey');
var split = require('./split');
var filter = require('./filter');
var find = require('./find');
var every = require('./every');
var window = require('./window');
var history = require('./history');
var setTimeout = require('./setTimeout');
var clearTimeout = require('./clearTimeout');
var removeEventListener = require('./removeEventListener');
var otherwise;
var states = [];

var S_name = 'name';
var S_params = 'params';

var href = function (stateName, stateParams, strict) {
	var error;
	var state = find(states, function (item) {
		return stateName === item[0];
	});
	var result = otherwise;
	var parameters;
	if (state) {
		result = state[2];
		parameters = state.slice(4);
		if (parameters.every(function (parameter) {
				var parameterName = parameter[0];
				var value = stateParams[parameterName];
				if (parameter[1].test(value)) {
					result = result.replace(new RegExp('\\{' + parameterName + '\\}', 'g'), value);
				} else {
					result = false;
				}
				return result;
			})) {
			result = '#' + encodeURI(result);
		} else {
			result = otherwise;
		}
	} else if (strict) {
		error = new Error('state not found');
		error.stateName = stateName;
		error.stateParams = stateParams;
		throw error;
	}
	return result;
};

var timer;
var callListenerIfIgnored = function () {
	timer = setTimeout(onHashChange);
};

var changeHash = function (hash) {
	callListenerIfIgnored();
	location.hash = hash;
};

var replaceHash = history ? function (hash) {
	callListenerIfIgnored();
	history.replaceState({}, null, hash);
} : changeHash;

var parse = function (pathName) {
	var state = find(states, function (state) {
		return state[1].test(pathName);
	});
	var parameters;
	if (state) {
		parameters = {};
		pathName.replace(state[1], function () {
			var args = arguments;
			var i;
			var length = state.length - 4;
			for (i = 0; i < length; i += 1) {
				parameters[state[i + 4][0]] = args[i + 1];
			}
		});
		state = {
			name: state[0],
			params: parameters,
			path: pathName,
			def: state
		};
	}
	return state;
};

var stateEvents = [];
var onChangeListeners = [];
var lastHash;

var onHashChange = function () {
	var hash = decodeURI(location.hash.slice(1));
	var state;
	var current;
	var stateName;
	var stateParams;
	clearTimeout(timer);
	if (hash === lastHash) {
		return;
	}
	lastHash = hash;
	state = parse(hash);
	removeEventListener(stateEvents);
	stateEvents = [];
	if (state) {
		stateName = state[S_name];
		stateParams = state[S_params];
		if (!exports.is(stateName, stateParams)) {
			current = exports.current || {};
			exports.current = state;
			onChangeListeners = filter(onChangeListeners, function (fn) {
				fn.call(null, stateName, stateParams, current[S_name], current[S_params]);
				return !fn.once;
			});
			state.def[3].call(null, stateName, stateParams, current[S_name], current[S_params]);
		}
	} else {
		changeHash(otherwise);
	}
};

var exports = module.exports = {
	define: function (stateName, url, onEnter) {
		var parameters = [];
		var pathExpression = url.replace(/\{(\w+):(.*?)\}/g, function (match, parameterName, parameterExpression) {
			if (!find(parameters, function (parameter) {
					return parameter[0] === parameterName;
				})) {
				push(parameters, [
					parameterName,
					parameterExpression
				]);
			}
			return '{' + parameterName + '}';
		});
		var pathMatcher = new RegExp('^' + pathExpression.replace(/\{(\w+)\}/g, function (match, parameterName) {
			var parameter = find(parameters, function (parameter) {
				return parameter[0] === parameterName;
			});
			var parameterExpression = parameter[1];
			parameter[1] = new RegExp(parameterExpression);
			return '(' + parameterExpression + ')';
		}) + '$');
		if (!isFunction(onEnter)) {
			onEnter = noop;
		}
		parameters.splice(0, 0, stateName, pathMatcher, pathExpression.replace(/\\/g, ''), onEnter);
		push(states, parameters);
		return exports;
	},
	otherwise: function (stateName, stateParams) {
		otherwise = href(stateName, stateParams, true);
		return exports;
	},
	go: function (stateName, stateParams) {
		changeHash(href(stateName, stateParams));
	},
	replace: function (stateName, stateParams) {
		replaceHash(href(stateName, stateParams));
	},
	parse: parse,
	href: href,
	start: function () {
		if (!otherwise) {
			throw new Error('otherwise is undefined');
		}
		onHashChange();
	},
	list: states,
	listener: function (listener) {
		push(stateEvents, listener);
	},
	is: function (stateName, stateParams) {
		var current = exports.current;
		var currentName = current && current.name;
		var result = currentName && stateName === currentName;
		if (result && stateParams) {
			forEachKey(current.params, function (value, key) {
				result = value === stateParams[key];
				return !result;
			});
		}
		return result;
	},
	isIn: function (stateName, stateParams) {
		var current = exports.current;
		var currentName = current && current[S_name];
		var result = false;
		if (currentName) {
			currentName = split(currentName, /\./);
			result = every(split(stateName, /\./), function (name, index) {
				return name === currentName[index];
			});
			if (result && stateParams) {
				forEachKey(current.params, function (value, key) {
					result = value === stateParams[key];
					return !result;
				});
			}
		}
		return result;
	},
	onChange: function (fn) {
		push(onChangeListeners, fn);
		return exports;
	},
	onceChange: function (fn) {
		fn.once = true;
		push(onChangeListeners, fn);
		return exports;
	}
};

addEventListener(window, 'hashchange', onHashChange);
addEventListener(window, 'pushstate', onHashChange);
addEventListener(window, 'popstate', onHashChange);

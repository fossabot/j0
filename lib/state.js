var addEventListener = require('./addEventListener');
var location = require('./location');
var encodeURI = require('./encodeURI');
var decodeURI = require('./decodeURI');
var noop = require('./noop');
var push = require('./push');
var forEachKey = require('./forEachKey');
var filter = require('./filter');
var find = require('./find');
var window = require('./window');
var removeEventListener = require('./removeEventListener');
var otherwise;
var states = [];

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

var changeHash = function (hash) {
	location.hash = hash;
};

var stateEvents = [];
var onChangeListeners = [];
var lastHash;

var onHashChange = function () {
	var hash = decodeURI(location.hash.slice(1));
	var parameters = {};
	var state;
	var current;
	var stateName;
	if (hash === lastHash) {
		return;
	}
	state = find(states, function (state) {
		return state[1].test(hash);
	});
	removeEventListener(stateEvents);
	stateEvents = [];
	if (state) {
		stateName = state[0];
		current = exports.current || {};
		hash.replace(state[1], function () {
			var args = arguments;
			var i;
			var length = state.length - 4;
			for (i = 0; i < length; i += 1) {
				parameters[state[i + 4][0]] = args[i + 1];
			}
		});
		if (!exports.is(stateName, parameters)) {
			onChangeListeners = filter(onChangeListeners, function (fn) {
				fn.call(null, stateName, parameters, current.name, current.params);
				return !fn.once;
			});
			if (!state) {
				changeHash('#' + lastHash);
				return;
			}
			exports.current = {
				name: stateName,
				params: parameters
			};
			state[3].call(null, stateName, parameters, current.name, current.params);
		}
	} else {
		changeHash(otherwise);
	}
	lastHash = hash;
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
		parameters.splice(0, 0, stateName, pathMatcher, pathExpression, onEnter || noop);
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
		var result = stateName === (current && current.name);
		if (result && stateParams) {
			forEachKey(current.params, function (value, key) {
				result = value === stateParams[key];
				return !result;
			});
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

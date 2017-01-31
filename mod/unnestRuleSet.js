var reduce = require('../lib/reduce');
var concat = require('../lib/concat');
var isArray = require('../lib/isArray');
var map = require('../lib/map');
var slice = require('../lib/slice');
var find = require('../lib/find');
var forEach = require('../lib/forEach');

var S_length = 'length';

var getDeclarations = function (results, item) {
	var length = item[S_length];
	var lastItem = item[length - 1];
	if (isArray(lastItem)) {
		// The item is a ruleSet.
		item = slice(item, 0, length - 1);
		results = concat(results, map(reduce(lastItem, getDeclarations, []), function (declaration) {
			declaration[0] = concat(item, declaration[0]);
			return declaration;
		}));
	} else {
		// The item is a declaration.
		results[results[S_length]] = [[], item];
	}
	return results;
};
var normalizePath = function (path) {
	var atRules = [];
	var selectors = [];
	forEach(path, function (fragment) {
		if (fragment.charAt(0) === '@') {
			atRules[atRules[S_length]] = fragment;
		} else {
			selectors[selectors[S_length]] = fragment;
		}
	});
	return concat(atRules, reduce(selectors, function (selectors, fragment) {
		return selectors ? selectors + fragment.replace(/^./, function (firstChar) {
			return firstChar === '&' ? '' : ' ' + firstChar;
		}) : fragment;
	}));
};
module.exports = function (ruleSet) {
	return map(reduce(getDeclarations([], ruleSet), function (results, declaration) {
		var path = normalizePath(declaration[0]);
		var id = path.join('');
		var found = find(results, function (ruleSet) {
			return ruleSet.id === id;
		});
		declaration = declaration[1];
		if (found) {
			found = found[found[S_length] - 1];
			found[found[S_length]] = declaration;
		} else {
			found = results[results[S_length]] = concat(path, [[declaration]]);
			found.id = path.id;
		}
		return results;
	}, []), function (ruleSet) {
		delete ruleSet.id;
		return ruleSet;
	});
};

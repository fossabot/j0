var Node = require('./Node');
var isString = require('./isString');
var isNumber = require('./isNumber');
var document = require('./document');
var forEach = require('./forEach');
var appendChild = require('./appendChild');
var setAttribute = require('./setAttribute');
var addEventListener = require('./addEventListener');
var filter;
var createElement = module.exports = function (data) {
	var element;
	if (data instanceof Node) {
		element = data;
	} else if (isString(data) || isNumber(data)) {
		element = document.createTextNode(data);
	} else if (data) {
		element = document.createElement(data.t || 'div');
		if (data.c) {
			forEach(data.c, function (data) {
				var childElement = createElement(data);
				if (childElement) {
					appendChild(element, childElement);
				}
			});
		}
		if (data.e) {
			forEach(data.e, function (data) {
				if (data) {
					addEventListener(element, data[0], data[1], data[2]);
				}
			});
		}
		if (data.a) {
			forEach(data.a, function (data) {
				if (data) {
					setAttribute(element, data[0], data[1]);
				}
			});
		}
		if (data.after) {
			data.after.call(element, element);
		}
	}
	if (filter) {
		filter(element);
	}
	return element;
};
createElement.filter = function (fn) {
	filter = fn;
};

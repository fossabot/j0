var Node = require('./Node');
var parentNode = require('./parentNode');
var hasClass = require('./hasClass');
var isString = require('./isString');
var isFunction = require('./isFunction');

var TEXT_NODE = Node.TEXT_NODE;
var ELEMENT_NODE = Node.ELEMENT_NODE;

module.exports = function (child, parent) {
	var check = isString(parent) ? function (child) {
		return hasClass(child, parent);
	} : (isFunction(parent) ? parent : function (child) {
		return child === parent;
	});
	var type = child && child.nodeType;
	while (type === TEXT_NODE || type === ELEMENT_NODE) {
		if (type === ELEMENT_NODE && check(child)) {
			return child;
		}
		child = parentNode(child);
		type = child && child.nodeType;
	}
	return false;
};

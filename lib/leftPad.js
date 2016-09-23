var isUndefined = require('./isUndefined');
var ceil = require('./Math').ceil;
var push = require('./push');
var join = require('./join');
module.exports = function (x, c, length) {
	var xLength;
	var cLength;
	var requiredCount;
	var padding;
	if (isUndefined(length)) {
		length = 2;
	}
	x = x.toString();
	c = isUndefined(c) ? '0' : c.toString();
	xLength = x.length;
	cLength = c.length;
	requiredCount = length - xLength;
	if (0 < requiredCount) {
		requiredCount = ceil(requiredCount / cLength);
		padding = [];
		while (requiredCount) {
			push(padding, c);
			requiredCount--;
		}
		x = join(padding, '').slice(0, length - xLength) + x;
	}
	return x;
};

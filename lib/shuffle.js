var random = require('./Math').random;
var reduce = require('./reduce');
var unshift = require('./unshift');
var push = require('./push');
module.exports = function (iterable) {
	return reduce(iterable, function (shuffled, item) {
		if (random() < 0.5) {
			unshift(shuffled, item);
		} else {
			push(shuffled, item);
		}
		return shuffled;
	}, []);
};

var forEachReverse = require('./forEachReverse');
var findIndex = require('./findIndex');
var splice = require('./splice');
module.exports = function (array, items) {
	forEachReverse(array, function (item, index, array) {
		if (0 <= findIndex(items, item)) {
			splice(array, index, 1);
		}
	});
	return array;
};

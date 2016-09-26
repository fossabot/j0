var forEachReverse = require('./forEachReverse');
var findIndex = require('./findIndex');
var splice = require('./splice');
module.exports = function (array, checker) {
	return forEachReverse(array, function (item, index, array) {
		if (findIndex(array, item, checker) !== index) {
			splice(array, index, 1);
		}
	});
};

var forEachReverse = require('./forEachReverse');
var unshift = require('./unshift');
module.exports = function (buns, patty) {
	var hamburger = [];
	forEachReverse(buns, function (bun, index) {
		unshift(hamburger, bun);
		if (0 < index) {
			unshift(hamburger, patty);
		}
	});
	return hamburger;
};

var removeElement = require('./removeElement');
module.exports = function (element) {
	var S_FIRSTCHILD = 'firstChild';
	while (element[S_FIRSTCHILD]) {
		removeElement(element[S_FIRSTCHILD], element);
	}
};

var document = require('./document');
var tail = '';
var exports = module.exports = function (value) {
	value += tail;
	document.title = value;
	return value;
};
exports.setTail = function (x) {
	tail = ' ' + x;
};
exports.getTail = function () {
	return tail;
};

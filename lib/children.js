var slice = require('./slice');
module.exports = function (element) {
	return slice(element.children);
};

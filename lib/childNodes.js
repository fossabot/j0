var slice = require('./slice');
module.exports = function (node) {
	return slice(node.childNodes);
};

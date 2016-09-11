var isNaN = require('./isNaN');
module.exports = function (x) {
	return typeof x === 'number' && !isNaN(x);
};

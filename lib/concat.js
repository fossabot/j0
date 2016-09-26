var Array = require('./Array');
module.exports = function () {
	return Array.prototype.concat.apply([], arguments);
};

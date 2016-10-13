var Blob = require('./Blob');
module.exports = function (x) {
	return x instanceof Blob;
};

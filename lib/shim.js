var isUndefined = require('./isUndefined');
module.exports = function (obj, key, value) {
	if (isUndefined(obj[key])) {
		obj[key] = value;
	}
};

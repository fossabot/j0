var forEach = require('./forEach');
var isUndefined = require('./isUndefined');
module.exports = function (obj, mapNames) {
	forEach(mapNames, function (item) {
		var from = item[0];
		var to = item[1];
		var value = obj[from];
		if (!isUndefined(value)) {
			obj[to] = value;
		}
		delete obj[from];
	});
	return obj;
};

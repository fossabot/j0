module.exports = function (object, fn) {
	var key;
	for (key in object) {
		if (object.hasOwnProperty(key) && fn(object[key], key, object)) {
			break;
		}
	}
};

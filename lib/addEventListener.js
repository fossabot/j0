var trim = require('./trim');
var map = require('./map');
module.exports = function (object, eventNames, fn) {
	return map(trim(eventNames).split(/\s+/), function (eventName) {
		object.addEventListener(eventName, fn);
		return [object, eventName, fn];
	});
};

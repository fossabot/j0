var trim = require('./trim');
var map = require('./map');

var S_addEventListener = 'addEventListener';

var exports = module.exports = function (object, eventNames, fn) {
	return map(trim(eventNames).split(/\s+/), function (eventName) {
		if (exports.middleware) {
			exports.middleware(object, eventName, fn);
		}
		object[S_addEventListener](eventName, fn);
		return [object, eventName, fn];
	});
};

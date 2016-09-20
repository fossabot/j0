var createEvent = require('./createEvent');
module.exports = function (element, eventName, data) {
	if (element) {
		element.dispatchEvent(createEvent(eventName, data));
	}
};

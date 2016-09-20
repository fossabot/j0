var CustomEvent = require('./CustomEvent');
var document = require('./document');
var getEvent;
if (CustomEvent) {
	getEvent = function (eventName, data) {
		return new CustomEvent(eventName, {
			detail: data,
			bubbles: false,
			cancelable: false
		});
	};
} else if (document.createEvent) {
	getEvent = function (eventName, data) {
		var event = document.createEvent('CustomEvent');
		event.initCustomEvent(eventName, false, false, data);
		return event;
	};
}
module.exports = getEvent;

import Symbol from '../../Symbol';
import Map from '../../Map';
import Set from '../../Set';

const key = Symbol('events');

function getEventListeners(element, eventName = '') {
	let allEvents = element[key];
	let events;
	if (!allEvents) {
		allEvents = new Map();
		element[key] = allEvents;
	}
	if (eventName) {
		events = allEvents.get(eventName);
		if (!events) {
			events = new Set();
			allEvents.set(eventName, events);
		}
		return events;
	}
	return allEvents;
}

export default getEventListeners;

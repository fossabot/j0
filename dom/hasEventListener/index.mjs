import getEventListeners from '../getEventListeners';

function hasEventListener(element, eventName, fn) {
	const events = getEventListeners(element, fn ? eventName : null);
	return events && events.has(fn ? fn : eventName);
}

export default hasEventListener;

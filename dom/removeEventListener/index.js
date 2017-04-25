import getEventListeners from '../getEventListeners';
import forEach from '../../Array/forEach';

function removeEventListener(element, eventName, fn) {
	const events = getEventListeners(element, eventName);
	if (fn) {
		element.removeEventListener(eventName, fn);
		events.delete(fn);
	} else if (eventName) {
		forEach(events, function (f) {
			removeEventListener(element, eventName, f);
		});
		events.clear();
	} else {
		forEach(events, function ([key, set]) {
			forEach(set, function (f) {
				removeEventListener(element, key, f);
			});
		});
	}
}

export default removeEventListener;

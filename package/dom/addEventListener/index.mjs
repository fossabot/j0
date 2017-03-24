import isUndefined from '../../isUndefined';
import includes from '../../Array/includes';
import push from '../../Array/push';

function getEvents(element) {
	let {j0ev} = element;
	if (isUndefined(j0ev)) {
		j0ev = {};
		element.j0ev = j0ev;
	}
	return j0ev;
}

function addListener(events, eventName, fn) {
	let listeners = events[eventName];
	if (isUndefined(listeners)) {
		listeners = [];
		events[eventName] = listeners;
	}
	if (!includes(listeners, fn)) {
		push(listeners, fn);
	}
}

function addEventListener(element, eventName, fn) {
	const events = getEvents(element);
	element.addEventListener(eventName, fn);
	addListener(events, eventName, fn);
}

export default addEventListener;

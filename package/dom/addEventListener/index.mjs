import getEventListeners from '../getEventListeners';

function addEventListener(element, eventName, fn) {
	element.addEventListener(eventName, fn);
	getEventListeners(element, eventName).add(fn);
}

export default addEventListener;

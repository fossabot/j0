import {document} from '../..';
import CustomEvent from '../../CustomEvent';

let createEvent;

if (CustomEvent) {
	createEvent = function (eventName, data) {
		return new CustomEvent(eventName, {
			detail: data,
			bubbles: false,
			cancelable: false
		});
	};
} else {
	createEvent = function (eventName, data) {
		const event = document.createEvent('CustomEvent');
		event.initCustomEvent(eventName, false, false, data);
		return event;
	};
}

function trigger(element, eventName, data) {
	element.dispatchEvent(createEvent(eventName, data));
}

export default trigger;

import {
	Event,
	document
} from 'j0';
function CustomEvent(event, params = {
	bubbles: false,
	cancelable: false
}) {
	const evt = document.createEvent('CustomEvent');
	evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	return evt;
}
CustomEvent.prototype = Event.prototype;
export default CustomEvent;

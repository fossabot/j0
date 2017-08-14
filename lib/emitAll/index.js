import {
	dom
} from 'j0';

function emitAll(eventName, data, selector, rootElement) {
	dom.findAll(selector, rootElement)
	.forEach((element) => {
		element.emit(eventName, data);
	});
}

export default emitAll;

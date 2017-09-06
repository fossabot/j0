import {
	N,
} from 'j0';

function emitAll(eventName, data, selector, rootElement) {
	N.findAll(selector, rootElement)
	.forEach((element) => {
		element.emit(eventName, data);
	});
}

export default emitAll;

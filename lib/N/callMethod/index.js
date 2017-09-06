import {
	Promise,
	console
} from 'j0';

function callMethod(event) {
	Promise.resolve(this[event.type](event))
	.catch(console.error);
}

export default callMethod;

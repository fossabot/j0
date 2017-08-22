import {
	assign,
	J0Element
} from 'j0';
import findAll from './findAll';
import getBody from './getBody';
import find from './find';

function dom(source) {
	return new J0Element(source);
}
assign(
	dom,
	{
		find,
		findAll,
		ready: async function (fn) {
			const body = await getBody;
			if (fn) {
				fn(body);
			}
			return body;
		}
	}
);

export default dom;

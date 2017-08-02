import {
	assign
} from 'j0';
import findAll from './findAll';
import Element from './J0Element';
import getBody from './getBody';
import wrap from './wrap';
import find from './find';

export default assign(
	wrap,
	{
		find,
		findAll,
		Element,
		ready: async function (fn) {
			const body = await getBody;
			if (fn) {
				fn(body);
			}
			return body;
		}
	}
);

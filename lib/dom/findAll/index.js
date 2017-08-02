import {document} from 'j0';
import wrap from '../wrap';

function findAll(selector, rootElement) {
	const list = (rootElement ? wrap(rootElement).node : document).querySelectorAll(selector);
	const result = [];
	for (let i = 0, {length} = list; i < length; i++) {
		result[i] = wrap(list[i]);
	}
	return result;
}

export default findAll;

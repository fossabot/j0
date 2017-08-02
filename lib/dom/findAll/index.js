import {document} from 'j0';
import wrap from '../wrap';

function findAll(selector, rootElement = document) {
	const list = rootElement.querySelectorAll(selector);
	const result = [];
	for (let i = 0, {length} = list; i < length; i++) {
		result.push(wrap(list[i]));
	}
	return result;
}

export default findAll;

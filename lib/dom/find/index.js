import {
	document
} from 'j0';
import wrap from '../wrap';

function find(selector, rootElement) {
	const element = (rootElement ? wrap(rootElement).node : document).querySelector(selector);
	return element ? wrap(element) : null;
}

export default find;

import {
	document
} from 'j0';
import wrap from './wrap';

function find(selector, rootElement = document) {
	const element = rootElement.querySelector(selector);
	return element && wrap(element);
}

export default find;

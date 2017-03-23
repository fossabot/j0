import document from '../../document';
import isString from '../../isString';
import isNode from '../../isNode';
import noop from '../../noop';
import setAttribute from '../setAttribute';
import appendChild from '../appendChild';
import addEventListener from '../addEventListener';

function processTace(tace = {}) {
	const {t = 'div', a = [], c = [], e = []} = tace;
	const element = document.createElement(t);
	for (const args of a.filter(noop)) {
		setAttribute(element, ...args);
	}
	appendChild(element, ...c.filter(noop).map(createElement));
	for (const args of e.filter(noop)) {
		addEventListener(element, ...args);
	}
	return element;
}

function createElement(data) {
	if (isNode(data)) {
		return data;
	} else if (isString(data)) {
		return document.createTextNode(data);
	}
	return processTace(data);
}

export default createElement;

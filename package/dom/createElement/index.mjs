import document from '../../document';
import isString from '../../isString';
import isNode from '../../isNode';
import setAttribute from '../setAttribute';
import appendChild from '../appendChild';
import addEventListener from '../addEventListener';
import filter from '../../Array/filter';
import forEach from '../../Array/forEach';

function processTace(tace = {}) {
	const {t = 'div', a = [], c = [], e = []} = tace;
	const element = document.createElement(t);
	forEach(filter(a), function (args) {
		setAttribute(element, ...args);
	});
	forEach(filter(c), function (data) {
		appendChild(element, createElement(data));
	});
	forEach(filter(e), function (args) {
		addEventListener(element, ...args);
	});
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

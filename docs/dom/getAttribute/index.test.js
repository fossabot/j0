(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function noop(x) {
	return x;
}

function every(iterable, fn = noop, thisArg = iterable) {
	let index = 0;
	for (const value of iterable) {
		if (!fn.call(thisArg, value, index, iterable)) {
			return false;
		}
		index += 1;
	}
	return true;
}

function isString(x) {
	return typeof x === 'string';
}

var isString$1 = function (...args) {
	return every(args, isString);
};

function isNode(...args) {
	return every(args, (arg) => {
		return arg instanceof Node;
	});
}

function setAttribute(element, attrName, ...value) {
	element.setAttribute(attrName, value.join(' '));
}

function appendChild(parentNode, ...newNodes) {
	for (const newNode of newNodes) {
		parentNode.appendChild(newNode);
	}
}

function isUndefined(x) {
	return typeof x === 'undefined';
}

var isUndefined$1 = function (...args) {
	return every(args, isUndefined);
};

function getEvents(element) {
	let {j0ev} = element;
	if (isUndefined$1(j0ev)) {
		j0ev = {};
		element.j0ev = j0ev;
	}
	return j0ev;
}

function addListener(events, eventName, fn) {
	let listeners = events[eventName];
	if (isUndefined$1(listeners)) {
		listeners = [];
		events[eventName] = listeners;
	}
	if (!listeners.includes(fn)) {
		listeners.push(fn);
	}
}

function addEventListener(element, ...args) {
	const fn = args.pop();
	const events = getEvents(element);
	for (const eventName of args) {
		element.addEventListener(eventName, fn);
		addListener(events, eventName, fn);
	}
}

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
	} else if (isString$1(data)) {
		return document.createTextNode(data);
	}
	return processTace(data);
}

function getAttribute(element, attributeName) {
	return element.getAttribute(attributeName);
}

it('should get an attribute from element', function () {
	const attributeName = 'a';
	const attributeValue = 'b';
	const element = createElement({
		a: [
			[attributeName, attributeValue]
		]
	});
	assert.equal(getAttribute(element, attributeName), attributeValue);
});

})));

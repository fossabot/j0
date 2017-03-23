(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function appendChild(parentNode, ...newNodes) {
	for (const newNode of newNodes) {
		parentNode.appendChild(newNode);
	}
}

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

function isFunction(x) {
	return typeof x === 'function';
}

var isFunction$1 = function (...args) {
	return every(args, isFunction);
};

function clamp(x, L = -Infinity, H = Infinity) {
	if (H < L) {
		[L, H] = [H, L];
	}
	if (x < L) {
		x = L;
	} else if (H < x) {
		x = H;
	}
	return x;
}

var MAX_SAFE_INTEGER = 9007199254740991;

function toLength(value) {
	const len = parseInt(value, 10);
	return clamp(len, 0, MAX_SAFE_INTEGER);
}

function from(arrayLike, mapFn, thisArg) {
	if (arrayLike === null) {
		throw new TypeError('Array.from: requires an array-like object - not null or undefined');
	}
	if (!(isUndefined$1(mapFn) || isFunction$1(mapFn))) {
		throw new TypeError('Array.from: when provided, the second argument must be a function');
	}
	const C = this;
	const items = Object(arrayLike);
	const length = toLength(items.length);
	const A = isFunction$1(C) ? Object(new C(length)) : [];
	for (let k = 0; k < length; k += 1) {
		const value = items[k];
		A[k] = mapFn ? mapFn.call(thisArg, value, k) : value;
	}
	A.length = length;
	return A;
}

it('should append an element', function () {
	const parent = createElement();
	const child = createElement();
	appendChild(parent, child);
	assert.equal(child.parentNode, parent);
});

it('should append a text element', function () {
	const parent = createElement();
	const child = createElement('text');
	appendChild(parent, child);
	assert.equal(child.parentNode, parent);
});

it('should append multiple elements', function () {
	const parent = createElement();
	const children = [
		{},
		'text',
		'text2'
	].map(createElement);
	appendChild(parent, ...children);
	assert.deepEqual(from(parent.childNodes), children);
});

})));

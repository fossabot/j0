import {
	Object,
	Array,
	document,
	Symbol,
	isArray,
	isString,
	isNode,
	isUndefined,
	Promise
} from 'j0';

const nodeKey = Symbol();
const eventsKey = Symbol();
const getBody = new Promise(function (resolve) {
	const interval = 50;
	function check() {
		const {body} = document;
		if (body) {
			resolve(wrap(body));
		} else {
			setTimeout(check, interval);
		}
	}
	setTimeout(check);
});

function superForEach(...args) {
	const fn = args.pop();
	if (isString(args[0])) {
		fn(...args);
	} else {
		args
		.forEach((arg) => {
			if (isArray(arg)) {
				superForEach(...arg, fn);
			} else {
				Object.keys(arg)
				.forEach((key) => {
					superForEach(key, arg[key], fn);
				});
			}
		});
	}
}

class J0Element {

	/* eslint-disable max-statements */
	constructor(source = {}) {
		if (source instanceof J0Element) {
			this[nodeKey] = source.node;
		} else if (isString(source)) {
			this[nodeKey] = document.createTextNode(source);
		} else if (isNode(source)) {
			this[nodeKey] = source;
		} else {
			const {t = 'div', a, c, e = [], n, o} = source;
			this[nodeKey] = wrap(
				n
				? document.createElementNS(n, t, o)
				: document.createElement(t)
			).node;
			if (c) {
				this.append(...c);
			}
			for (let i = 0, {length} = e; i < length; i++) {
				const item = e[i];
				if (item) {
					this.on(item[0], item[1]);
				}
			}
			if (a) {
				this.attr(a);
			}
		}
		this[eventsKey] = [];
	}
	/* eslint-enable max-statements */

	equals(element) {
		return this.node === wrap(element).node;
	}

	get node() {
		return this[nodeKey];
	}

	text(text) {
		const {node} = this;
		if (isUndefined(text)) {
			return node.textContent;
		}
		node.textContent = text;
		return this;
	}

	html(html) {
		const {node} = this;
		if (isUndefined(html)) {
			return node.innerHTML;
		}
		node.innerHTML = html;
		return this;
	}

	get parent() {
		const {parentNode} = this.node;
		return parentNode && wrap(parentNode);
	}

	set parent(source) {
		wrap(source).append(this);
	}

	insertBefore(newElement, referenceElement) {
		this.node.insertBefore(wrap(newElement).node, referenceElement && referenceElement.node);
	}

	get previous() {
		const {previousSibling} = this.node;
		return previousSibling ? wrap(previousSibling) : null;
	}

	set previous(element) {
		this.parent.insertBefore(element, this);
	}

	get next() {
		const {nextSibling} = this.node;
		return nextSibling ? wrap(nextSibling) : null;
	}

	set next(element) {
		this.parent.insertBefore(element, this.next);
	}

	get childNodes() {
		return Array.from(this.node.childNodes)
		.map(wrap);
	}

	get children() {
		return Array.from(this.node.children)
		.map(wrap);
	}

	get firstChild() {
		const {firstChild} = this.node;
		return firstChild ? wrap(firstChild) : null;
	}

	set firstChild(element) {
		const {firstChild} = this;
		if (firstChild) {
			firstChild.previous = element;
		} else {
			this.append(element);
		}
	}

	get lastChild() {
		const {lastChild} = this.node;
		return lastChild ? wrap(lastChild) : null;
	}

	set lastChild(element) {
		const {lastChild} = this;
		if (lastChild) {
			this.lastChild.next = element;
		} else {
			this.append(element);
		}
	}

	prepend(...elements) {
		elements
		.forEach((element) => {
			this.firstChild = element;
		});
		return this;
	}

	append(...elements) {
		const {node} = this;
		elements
		.forEach((element) => {
			node.appendChild(wrap(element).node);
		});
		return this;
	}

	remove() {
		const {parent} = this;
		if (parent) {
			parent.node.removeChild(this.node);
		}
		return this;
	}

	empty() {
		const {childNodes} = this;
		for (let i = 0, {length} = childNodes; i < length; i++) {
			childNodes[i].remove();
		}
		return this;
	}

	setAttribute(name, ...value) {
		this.node.setAttribute(name, value.join(' '));
		return this;
	}

	getAttribute(name) {
		return this.node.getAttribute(name);
	}

	attr(...args) {
		superForEach(...args, (...params) => {
			this.setAttribute(...params);
		});
		return this;
	}

	on(eventName, fn) {
		const wrapped = (event) => {
			fn.call(this, event);
		};
		this.node.addEventListener(eventName, wrapped);
		this.events.push([eventName, fn, wrapped]);
		return this;
	}

	off(eventName, fn) {
		const {events} = this;
		for (let i = events.length; i--;) {
			const [e, f, wrapped] = events[i];
			if (e === eventName && (!fn || fn === f)) {
				this.node.removeEventListener(eventName, wrapped);
				events.splice(i, 1);
			}
		}
	}

	setListener(...args) {
		superForEach(...args, (...params) => {
			this.on(...params);
		});
		return this;
	}

	get listeners() {
		return this[eventsKey];
	}

	get attributes() {
		return this.node.attributes;
	}

	find(selector) {
		return find(selector, this);
	}

	findAll(selector) {
		return findAll(selector, this);
	}

}

function wrap(source) {
	return new J0Element(source);
}

function find(selector, rootElement = document) {
	const element = rootElement.querySelector(selector);
	return element && wrap(element);
}

function findAll(selector, rootElement = document) {
	const list = rootElement.querySelectorAll(selector);
	const result = [];
	for (let i = 0, {length} = list; i < length; i++) {
		result.push(wrap(list[i]));
	}
	return result;
}

wrap.find = find;
wrap.findAll = findAll;
wrap.ready = async function (fn) {
	await getBody;
	if (fn) {
		fn();
	}
};

export default wrap;

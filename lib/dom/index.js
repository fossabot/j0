import {
	keys,
	assign,
	Array,
	document,
	Symbol,
	isArray,
	isString,
	isNode,
	Promise,
	CustomEvent,
	Set,
	getComputedStyle
} from 'j0';

const nodeKey = Symbol();
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
				keys(arg)
				.forEach((key) => {
					superForEach(key, arg[key], fn);
				});
			}
		});
	}
}

class J0Element {

	constructor(source = {}) {
		assign(
			this,
			{
				listeners: new Set()
			}
		);
		if (source instanceof J0Element) {
			this[nodeKey] = source.node;
		} else if (isString(source)) {
			this[nodeKey] = document.createTextNode(source);
		} else if (isNode(source)) {
			this[nodeKey] = source;
		} else {
			const {t, a, c, e, n, o} = source || {};
			this[nodeKey] = wrap(
				n
				? document.createElementNS(n, t, o)
				: document.createElement(t || 'div')
			).node;
			if (c) {
				this.append(...c);
			}
			if (e) {
				this.on(e);
			}
			if (a) {
				this.attr(a);
			}
		}
	}

	equals(element) {
		return this.node === wrap(element).node;
	}

	get node() {
		return this[nodeKey];
	}

	get text() {
		return this.node.textContent;
	}

	setText(text) {
		this.node.textContent = text;
		return this;
	}

	get html() {
		return this.node.innerHTML;
	}

	setHTML(html) {
		this.node.innerHTML = html;
		return this;
	}

	get parent() {
		const {parentNode} = this.node;
		return parentNode && wrap(parentNode);
	}

	setParent(source) {
		wrap(source).append(this);
		return this;
	}

	insertBefore(newElement, referenceElement) {
		this.node.insertBefore(wrap(newElement).node, referenceElement && referenceElement.node);
	}

	get previous() {
		const {previousSibling} = this.node;
		return previousSibling ? wrap(previousSibling) : null;
	}

	setPrevious(element) {
		this.parent.insertBefore(element, this);
		return this;
	}

	get next() {
		const {nextSibling} = this.node;
		return nextSibling ? wrap(nextSibling) : null;
	}

	setNext(element) {
		this.parent.insertBefore(element, this.next);
		return this;
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

	setFirstChild(element) {
		const {firstChild} = this;
		if (firstChild) {
			firstChild.setPrevious(element);
		} else {
			this.append(element);
		}
		return this;
	}

	get lastChild() {
		const {lastChild} = this.node;
		return lastChild ? wrap(lastChild) : null;
	}

	setLastChild(element) {
		const {lastChild} = this;
		if (lastChild) {
			this.lastChild.setNext(element);
		} else {
			this.append(element);
		}
		return this;
	}

	prepend(...elements) {
		elements
		.forEach((element) => {
			this.setFirstChild(element);
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

	addEventListener(eventName, fn) {
		if (wrap.eventFilter && wrap.eventFilter.call(this, eventName, fn)) {
			return this;
		}
		const wrapped = (event) => {
			fn.call(this, event);
		};
		this.node.addEventListener(eventName, wrapped);
		this.listeners.add([eventName, fn, wrapped]);
		return this;
	}

	once(eventName, fn) {
		const item = [eventName, fn];
		const wrapped = (event) => {
			this.node.removeEventListener(eventName, wrapped);
			this.listeners.delete(item);
			fn.call(this, event);
		};
		item.push(wrapped);
		this.node.addEventListener(eventName, wrapped);
		this.listeners.add(item);
		return this;
	}

	on(...args) {
		superForEach(...args, (...params) => {
			this.addEventListener(...params);
		});
		return this;
	}

	removeEventListener(eventName, fn) {
		this.listeners
		.forEach((item) => {
			const [e, f, wrapped] = item;
			if (e === eventName && (!fn || fn === f)) {
				this.node.removeEventListener(e, wrapped);
				this.listeners.delete(item);
			}
		});
	}

	off(eventName, fn) {
		this.removeEventListener(eventName, fn);
	}

	emit(eventName, detail) {
		const event = new CustomEvent(eventName, {detail});
		this.node.dispatchEvent(event);
		return this;
	}

	find(selector) {
		return find(selector, this.node);
	}

	findAll(selector) {
		return findAll(selector, this.node);
	}

	get bb() {
		return this.node.getBoundingClientRect();
	}

	get attributes() {
		return this.node.attributes;
	}

	get style() {
		return this.node.style;
	}

	setStyle(styles) {
		assign(this.style, styles);
		return this;
	}

	get classList() {
		return this.node.classList;
	}

	addClass(...args) {
		const {classList} = this;
		if (classList) {
			args
			.forEach((arg) => {
				this.classList.add(arg);
			});
		}
		return this;
	}

	removeClass(...args) {
		const {classList} = this;
		if (classList) {
			args
			.forEach((arg) => {
				this.classList.remove(arg);
			});
		}
		return this;
	}

	toggleClass(...args) {
		const {classList} = this;
		if (classList) {
			args
			.forEach((arg) => {
				this.classList.toggle(arg);
			});
		}
		return this;
	}

	hasClass(...args) {
		const {classList} = this;
		if (classList) {
			return args
			.every((arg) => {
				return this.classList.contains(arg);
			});
		}
		return args.length === 0;
	}

	get computedStyle() {
		return getComputedStyle(this.node);
	}

	clone(deep = true) {
		return wrap(this.node.cloneNode(deep));
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

assign(wrap, {
	find,
	findAll,
	ready: async function (fn) {
		const body = await getBody;
		if (fn) {
			fn(body);
		}
		return body;
	}
});

export default wrap;

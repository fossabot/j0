import {
	document,
	Symbol,
	isString,
	isNode,
	Promise
} from 'j0';

const nodeKey = Symbol('node');
const eventsKey = Symbol('events');
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
			const {t = 'div', a = [], c = [], e = []} = source;
			this[nodeKey] = wrap(document[`createElement${t.indexOf(':') < 0 ? '' : 'NS'}`](t)).node;
			for (let i = 0, {length} = c; i < length; i++) {
				const item = c[i];
				if (item) {
					this.append(item);
				}
			}
			for (let i = 0, {length} = e; i < length; i++) {
				const item = e[i];
				if (item) {
					this.on(item[0], item[1]);
				}
			}
			for (let i = 0, {length} = a; i < length; i++) {
				const item = a[i];
				if (item) {
					this.setAttribute(...item);
				}
			}
		}
		this[eventsKey] = [];
	}
	/* eslint-enable max-statements */

	get node() {
		return this[nodeKey];
	}

	get text() {
		return this.node.textContent;
	}

	set text(text = '') {
		this.node.textContent = text;
	}

	get parent() {
		const {parentNode} = this.node;
		return parentNode && wrap(parentNode);
	}

	get previous() {
		const {previousSibling} = this.node;
		return previousSibling && wrap(previousSibling);
	}

	get next() {
		const {nextSibling} = this.node;
		return nextSibling && wrap(nextSibling);
	}

	set parent(source) {
		wrap(source).append(this);
	}

	get childNodes() {
		return [...this.node.childNodes]
		.map(wrap);
	}

	get children() {
		return [...this.node.children]
		.map(wrap);
	}

	get events() {
		return this[eventsKey];
	}

	get attributes() {
		return this.node.attributes;
	}

	append(element) {
		this.node.appendChild(wrap(element).node);
		return this;
	}

	insertBefore(newElement, referenceElement) {
		this.node.insertBefore(wrap(newElement).node, referenceElement && referenceElement.node);
	}

	before(element) {
		this.parent.insertBefore(element, this);
	}

	after(element) {
		this.parent.insertBefore(element, this.next);
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

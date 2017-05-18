import Symbol from '../Symbol';
import document from '../document';
import isString from '../isString';
import isNode from '../isNode';

const nodeKey = Symbol('node');
const eventsKey = Symbol('events');

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
		this.node.addEventListener(eventName, (event) => {
			fn.call(this, event);
		});
		this.events.push([eventName, fn]);
		return this;
	}

	off(eventName, fn) {
		const {events} = this;
		for (let i = events.length; i--;) {
			const [e, f] = events[i];
			if (e === eventName && (!fn || fn === f)) {
				this.node.removeEventListener(eventName, fn);
				events.splice(i, 1);
			}
		}
	}

}

function wrap(source) {
	return new J0Element(source);
}

export default wrap;

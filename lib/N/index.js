import {
	assign,
	Array,
	Node,
	document,
	Symbol,
	isString,
	isArray,
	isNode,
	CustomEvent,
	Set,
	Map,
	getComputedStyle,
	isFunction,
	setTimeout,
	call,
	addEventListenerWithOptions,
	Math,
	getSelection,
} from 'j0';
import forEachItem from './forEachItem';
import callMethod from './callMethod';
import getBody from './getBody';
const nodeKey = Symbol();

function wrap(element) {
	return new N(element);
}

function find(selector, rootElement) {
	const element = (rootElement ? wrap(rootElement).node : document).querySelector(selector);
	return element ? wrap(element) : null;
}

function findAll(selector, rootElement) {
	const list = (rootElement ? wrap(rootElement).node : document).querySelectorAll(selector);
	const result = [];
	for (let i = 0, {length} = list; i < length; i++) {
		result[i] = wrap(list[i]);
	}
	return result;
}

const DIRECTION_TOP = 0;
const DIRECTION_RIGHT = 1;
const DIRECTION_BOTTOM = 2;
const DIRECTION_LEFT = 3;

class N {

	constructor(source = {}) {
		assign(
			this,
			{
				listeners: new Set()
			}
		);
		if (source instanceof N) {
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
			forEachItem(e, (args) => {
				this.on(...(isArray(args) ? args : [args]));
			});
			forEachItem(a, (args) => {
				this.setAttribute(...args);
			});
		}
	}

	static get wrap() {
		return wrap;
	}

	static get find() {
		return find;
	}

	static get findAll() {
		return findAll;
	}

	static get directions() {
		return {
			top: DIRECTION_TOP,
			right: DIRECTION_RIGHT,
			bottom: DIRECTION_BOTTOM,
			left: DIRECTION_LEFT,
		};
	}

	static get directionKeys() {
		return {
			[DIRECTION_TOP]: 'top',
			[DIRECTION_RIGHT]: 'right',
			[DIRECTION_BOTTOM]: 'bottom',
			[DIRECTION_LEFT]: 'left',
		};
	}

	find(selector) {
		return find(selector, this);
	}

	findAll(selector) {
		return findAll(selector, this);
	}

	static async ready(fn) {
		const body = await getBody;
		if (fn) {
			fn(body);
		}
		return body;
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

	setPrevious(...elements) {
		while (0 < elements.length) {
			const element = wrap(elements.shift());
			this.parent.insertBefore(element, this);
		}
		return this;
	}

	get next() {
		const {nextSibling} = this.node;
		return nextSibling ? wrap(nextSibling) : null;
	}

	setNext(...elements) {
		let lastElement = this.next;
		while (0 < elements.length) {
			const element = wrap(elements.pop());
			this.parent.insertBefore(element, lastElement);
			lastElement = element;
		}
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

	replaceChild(newChild, oldChild) {
		this.node.replaceChild(
			wrap(newChild).node,
			wrap(oldChild).node
		);
		return this;
	}

	replaceWith(...newChilds) {
		const lastNewChild = wrap(newChilds.pop());
		this.parent.replaceChild(lastNewChild, this);
		lastNewChild.setPrevious(...newChilds);
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
			if (isString(element) || element) {
				node.appendChild(wrap(element).node);
			}
		});
		return this;
	}

	remove(delay) {
		if (0 < delay) {
			setTimeout(() => {
				this.remove();
			}, delay);
		} else {
			const {parent} = this;
			if (parent) {
				parent.node.removeChild(this.node);
			}
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

	removeAttribute(...names) {
		for (const name of names) {
			this.node.removeAttribute(name);
		}
		return this;
	}

	getMethodCaller(methodName) {
		if (!isFunction(this[methodName])) {
			throw new Error(`${this.constructor.name} doesn't have ${methodName} method`);
		}
		return callMethod;
	}

	once(eventName, fn = this.getMethodCaller(eventName), options = {}) {
		const item = [eventName, fn];
		const wrapped = (event) => {
			this.node.removeEventListener(eventName, wrapped);
			this.listeners.delete(item);
			call(fn, this, [event]);
		};
		item.push(wrapped);
		addEventListenerWithOptions(
			this.node,
			eventName,
			wrapped,
			assign(
				{passive: true},
				options,
			)
		);
		this.listeners.add(item);
		return this;
	}

	on(eventName, fn = this.getMethodCaller(eventName), options = {}) {
		if (N.eventFilter && N.eventFilter.call(this, eventName, fn)) {
			return this;
		}
		const wrapped = (event) => {
			call(fn, this, [event]);
		};
		addEventListenerWithOptions(
			this.node,
			eventName,
			wrapped,
			assign(
				{passive: true},
				options,
			)
		);
		this.listeners.add([eventName, fn, wrapped]);
		return this;
	}

	off(eventName, fn) {
		this.listeners
		.forEach((item) => {
			const [e, f, wrapped] = item;
			if (e === eventName && (!fn || fn === f)) {
				this.node.removeEventListener(e, wrapped);
				this.listeners.delete(item);
			}
		});
		return this;
	}

	emit(eventName, detail) {
		const event = new CustomEvent(eventName, {detail});
		this.node.dispatchEvent(event);
		return this;
	}

	get bb() {
		return this.node.getBoundingClientRect();
	}

	get attributes() {
		const result = new Map();
		const {attributes} = this.node;
		if (attributes) {
			for (const {name, value} of attributes) {
				result.set(name, value);
			}
		}
		return result;
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

	get tagName() {
		return `${this.node.tagName || ''}`.toLowerCase();
	}

	get nodeType() {
		return this.node.nodeType;
	}

	get isElementNode() {
		return this.nodeType === Node.ELEMENT_NODE;
	}

	get isTextNode() {
		return this.nodeType === Node.TEXT_NODE;
	}

	toObject() {
		if (this.isTextNode) {
			return this.text;
		} else if (this.isElementNode) {
			const result = {};
			const {
				tagName,
				attributes,
				childNodes
			} = this;
			if (tagName !== 'div') {
				result.t = tagName;
			}
			if (0 < attributes.size) {
				result.a = Array.from(attributes);
			}
			if (0 < childNodes.length) {
				result.c = childNodes.map((node) => {
					return node.toObject();
				});
			}
			return result;
		}
		return null;
	}

	normalize() {
		this.node.normalize();
		return this;
	}

	walk(fn) {
		const {childNodes} = this;
		for (let i = 0, {length} = childNodes; i < length; i++) {
			const node = childNodes[i];
			if (fn(node)) {
				return true;
			}
			if (node.walk(fn)) {
				return true;
			}
		}
		return false;
	}

	getForward(limit) {
		let element = this.firstChild;
		if (element) {
			return element;
		}
		element = this;
		while (element) {
			if (element.equals(limit)) {
				return null;
			}
			const {next} = element;
			if (next) {
				return next;
			}
			element = element.parent;
		}
		return null;
	}

	getBackward(limit) {
		let element = this.lastChild;
		if (element) {
			return element;
		}
		element = this;
		while (element) {
			if (element.equals(limit)) {
				return null;
			}
			const {previous} = element;
			if (previous) {
				return previous;
			}
			element = element.parent;
		}
		return null;
	}

	walkForward(fn, limit, callTheFunction) {
		if (this.equals(limit)) {
			return null;
		}
		if (callTheFunction && fn(this)) {
			return this;
		}
		const forward = this.getForward(limit);
		if (forward) {
			return forward.walkForward(fn, limit, true);
		}
	}

	walkBackward(fn, limit, callTheFunction) {
		if (this.equals(limit)) {
			return null;
		}
		if (callTheFunction && fn(this)) {
			return this;
		}
		const backward = this.getBackward(limit);
		if (backward) {
			return backward.walkBackward(fn, limit, true);
		}
	}

	get focused() {
		return this.equals(document.activeElement);
	}

	forEachAncestor(fn, skip = 0) {
		let element = this;
		while (element && !element.equals(document)) {
			if (--skip < 0) {
				if (fn(element)) {
					break;
				}
			}
			element = element.parent;
		}
	}

	getNextText(limit) {
		return this
		.walkForward((node) => {
			return node.isTextNode;
		}, limit);
	}

	getPreviousText(limit) {
		return this
		.walkBackward((node) => {
			return node.isTextNode;
		}, limit);
	}

	get textDirection() {
		if (!this._textDirection) {
			const contenteditable = this.getAttribute('contenteditable');
			if (!contenteditable) {
				this.setAttribute('contenteditable', 'true');
			}
			const texts = ['A', 'B', 'M', 'M']
			.map((text) => {
				return new N(text).node;
			});
			const elements = [
				texts[3],
				0,
				texts[2],
				0,
				texts[1],
				texts[0],
			]
			.map((element) => {
				this.prepend(element || {t: 'br'});
				return this.firstChild;
			});
			const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = texts
			.map((textNode) => {
				const range = document.createRange();
				range.setStart(textNode, 0);
				range.setEnd(textNode, 1);
				const rect = range.getBoundingClientRect();
				return [
					(rect.left + rect.right) / 2,
					(rect.top + rect.bottom) / 2,
				]
			});
			elements
			.forEach((element) => {
				element.remove();
			});
			if (!contenteditable) {
				this.removeAttribute('contenteditable');
			}
			this._textDirection = [
				[y2 - y1, x2 - x1],
				[y4 - y3, x4 - x3],
			]
			.map(([y, x]) => {
				const arg = Math.atan2(y, x) / Math.PI;
				const absArg = arg < 0 ? -arg : arg;
				if (absArg < 0.25) {
					return DIRECTION_RIGHT;
				} else if (0.75 < absArg) {
					return DIRECTION_LEFT;
				} else if (arg < 0) {
					return DIRECTION_TOP;
				} else {
					return DIRECTION_BOTTOM;
				}
			});
		}
		return this._textDirection;
	}

	forwardRange(range) {
		try {
			range.setStart(range.endContainer, range.endOffset);
			range.setEnd(range.endContainer, range.endOffset + 1);
		} catch (error) {
			const nextText = new N(range.endContainer).getNextText(this);
			if (!nextText) {
				return false;
			}
			range.setStart(nextText.node, 0);
			range.setEnd(nextText.node, 1);
		}
		return true;
	}

	backwardRange(range) {
		if (0 < range.startOffset) {
			range.setEnd(range.startContainer, range.startOffset);
			range.setStart(range.startContainer, range.startOffset - 1);
		} else {
			const previousText = new N(range.startContainer).getPreviousText(this);
			if (!previousText) {
				return false;
			}
			range.selectNodeContents(previousText.node);
			range.setStart(range.endContainer, range.endOffset - 1);
		}
		return true;
	}

	getCollapsedRectOfRange(range, reverse = false) {
		let {
			left,
			right,
			width,
			top,
			bottom,
			height,
		} = range.getBoundingClientRect();
		const [mainDirection] = this.textDirection;
		switch (mainDirection) {
		case DIRECTION_TOP:
			bottom = top = reverse ? top : bottom;
			height = 0;
			break;
		case DIRECTION_BOTTOM:
			bottom = top = reverse ? bottom : top;
			height = 0;
			break;
		case DIRECTION_LEFT:
			right = left = reverse ? left : right;
			width = 0;
			break;
		case DIRECTION_RIGHT:
			right = left = reverse ? right : left;
			width = 0;
			break;
		}
		return {
			left,
			right,
			width,
			top,
			bottom,
			height,
		};
	}

	getRangeRect(range) {
		const clonedRange = range.cloneRange();
		if (clonedRange.collapsed) {
			if (this.forwardRange(clonedRange)) {
				return this.getCollapsedRectOfRange(clonedRange);
			} else if (this.backwardRange(clonedRange)) {
				return this.getCollapsedRectOfRange(clonedRange, true);
			} else {
				const text = new N('A');
				this.append(text);
				clonedRange.selectNodeContents(text.node);
				const rect = this.getCollapsedRectOfRange(clonedRange);
				text.remove();
				return rect;
			}
		}
		return clonedRange.getBoundingClientRect();
	}

	modifyRangeForwardChar(range, alter) {
		const {startContainer, startOffset} = range;
		range.collapse(false);
		if (!this.forwardRange(range)) {
			this.emit('range:last');
		}
		if (alter === 'expand') {
			range.setStart(startContainer, startOffset);
		} else {
			range.collapse(false);
		}
	}

	modifyRangeBackwardChar(range, alter) {
		const {endContainer, endOffset} = range;
		range.collapse(true);
		if (!this.backwardRange(range)) {
			this.emit('range:first');
		}
		if (alter === 'expand') {
			range.setEnd(endContainer, endOffset);
		} else {
			range.collapse(true);
		}
	}

	modifyRangeLine(range, alter, direction, anchorRect = this.getRangeRect(range)) {
		const {startContainer, startOffset, endContainer, endOffset} = range;
		const [mainDirection, crossDirection] = this.textDirection;
		let targetX = anchorRect.left;
		let targetY = anchorRect.top;
		switch (direction) {
		case DIRECTION_LEFT:
			targetX -= anchorRect.width;
			break;
		case DIRECTION_RIGHT:
			targetX += anchorRect.height;
			break;
		case DIRECTION_TOP:
			targetY -= anchorRect.height;
			break;
		case DIRECTION_BOTTOM:
			targetY += anchorRect.height;
			break;
		}
		const forward = crossDirection === direction;
		const stepFn = this[`${forward ? 'for' : 'back'}wardRange`];
		const onDifferentLine = {
			[DIRECTION_TOP]: (rect) => {
				return rect.top < anchorRect.top;
			},
			[DIRECTION_BOTTOM]: (rect) => {
				return anchorRect.bottom < rect.bottom;
			},
			[DIRECTION_LEFT]: (rect) => {
				return rect.left < anchorRect.left;
			},
			[DIRECTION_RIGHT]: (rect) => {
				return anchorRect.right < rect.right;
			},
		}[direction];
		const previous = {};
		function checkDiff(x, y, container, offset) {
			const diff = Math.hypot(
				x - targetX,
				y - targetY,
			);
			if (previous.diff < diff) {
				range[`set${forward ? 'End' : 'Start'}`](previous.container, previous.offset);
				return true;
			} else {
				previous.diff = diff;
				previous.container = container;
				previous.offset = offset;
				return false;
			}
		}
		let calculateDiff;
		switch (mainDirection) {
		case DIRECTION_LEFT:
			calculateDiff = forward
			? (rect, range) => {
				return checkDiff(rect.right, rect.top, range.startContainer, range.startOffset) ||
				checkDiff(rect.left, rect.top, range.endContainer, range.endOffset);
			}
			: (rect, range) => {
				return checkDiff(rect.left, rect.top, range.endContainer, range.endOffset) ||
				checkDiff(rect.right, rect.top, range.startContainer, range.startOffset);
			};
			break;
		case DIRECTION_RIGHT:
			calculateDiff = forward
			? (rect, range) => {
				return checkDiff(rect.left, rect.top, range.startContainer, range.startOffset) ||
				checkDiff(rect.right, rect.top, range.endContainer, range.endOffset);
			}
			: (rect, range) => {
				return checkDiff(rect.right, rect.top, range.endContainer, range.endOffset) ||
				checkDiff(rect.left, rect.top, range.startContainer, range.startOffset);
			};
			break;
		case DIRECTION_TOP:
			calculateDiff = forward
			? (rect, range) => {
				return checkDiff(rect.left, rect.bottom, range.startContainer, range.startOffset) ||
				checkDiff(rect.left, rect.top, range.endContainer, range.endOffset);
			}
			: (rect, range) => {
				return checkDiff(rect.left, rect.top, range.endContainer, range.endOffset) ||
				checkDiff(rect.left, rect.bottom, range.startContainer, range.startOffset);
			};
			break;
		case DIRECTION_BOTTOM:
			calculateDiff = forward
			? (rect, range) => {
				return checkDiff(rect.left, rect.top, range.startContainer, range.startOffset) ||
				checkDiff(rect.left, rect.bottom, range.endContainer, range.endOffset);
			}
			: (rect, range) => {
				return checkDiff(rect.left, rect.bottom, range.endContainer, range.endOffset) ||
				checkDiff(rect.left, rect.top, range.startContainer, range.startOffset);
			};
			break;
		}
		let done = false;
		while (stepFn.call(this, range)) {
			const rect = range.getBoundingClientRect();
			done = 0 < rect.width * rect.height && onDifferentLine(rect) && calculateDiff(rect, range);
			if (done) {
				break;
			}
		}
		if (forward) {
			if (alter === 'move') {
				range.setStart(range.endContainer, range.endOffset);
			} else {
				range.setStart(startContainer, startOffset);
			}
		} else {
			if (alter === 'move') {
				range.setEnd(range.startContainer, range.startOffset);
			} else {
				range.setEnd(endContainer, endOffset);
			}
		}
		if (!done) {
			this.emit(`range:${forward ? 'last' : 'first'}line`, anchorRect);
		}
	}

	modifyRange(range, alter, direction) {
		const [mainDirection] = this.textDirection;
		direction = N.directions[direction];
		if (mainDirection === direction) {
			this.modifyRangeForwardChar(range, alter);
		} else if ((mainDirection - direction) % 2 === 0) {
			this.modifyRangeBackwardChar(range, alter);
		} else {
			this.modifyRangeLine(range, alter, direction);
		}
		return this;
	}

	modifySelection(alter, direction) {
		const selection = getSelection();
		const range = selection.getRangeAt(0);
		selection.removeAllRanges();
		this.modifyRange(range, alter, direction);
		selection.addRange(range);
		return this;
	}

}

export default N;

import Symbol from '../../Symbol';
import isNumber from '../../isNumber';
import isFunction from '../../isFunction';
import Object from '..';

const key = Symbol.iterator;

function getIterator() {
	if (isFunction(this.next)) {
		return {
			next: () => {
				return this.next();
			}
		};
	} else if (isNumber(this.length)) {
		let index = 0;
		return {
			next: () => {
				const result = {
					value: this[index],
					done: !(index < this.length)
				};
				index += 1;
				return result;
			}
		};
	}
	throw new TypeError(`${this} is not iterable`);
}

if (NodeList.prototype[key]) {
	NodeList.prototype[key] = getIterator;
}

if (HTMLCollection.prototype[key]) {
	HTMLCollection.prototype[key] = getIterator;
}

if (NamedNodeMap.prototype[key]) {
	NamedNodeMap.prototype[key] = getIterator;
}

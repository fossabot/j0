import {
	isUndefined,
	Map,
	Symbol,
} from 'j0';

const KEYS = Symbol('lazyKeys');

class Lazy {

	getLazy(key, getter, force) {
		let keys = this[KEYS];
		if (!keys) {
			keys = new Map();
			this[KEYS] = keys;
		}
		let internalKey = keys.get(key);
		if (!internalKey) {
			internalKey = Symbol(key);
			keys.set(key, internalKey);
		}
		let value = this[internalKey];
		if (force || isUndefined(value)) {
			value = getter();
			this[internalKey] = value;
		}
		return value;
	}

}

export default Lazy;

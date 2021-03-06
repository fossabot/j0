import {
	isString,
	Date,
	TypeError,
	Object
} from 'j0';

const hex = 16;

class SymbolRegistry {

	constructor() {
		this.seed = Date.now();
		this.registry = [];
	}

	get(key = '', salt = Date.now()) {
		const symbol = `Symbol(${key})${(this.seed + this.registry.length).toString(hex)}`;
		this.registry.push([symbol, `${key}${salt}`]);
		return symbol;
	}

	for(key) {
		if (isString(key)) {
			const {length} = this.registry;
			for (let i = 0; i < length; i += 1) {
				const item = this.registry[i];
				if (key === item[1]) {
					return item[0];
				}
			}
			return this.get(key, '');
		}
		throw new TypeError(`Symbol.for was called with non-string: ${key}`);
	}

	keyFor(sym) {
		const {length} = this.registry;
		for (let i = 0; i < length; i += 1) {
			const item = this.registry[i];
			if (sym === item[0]) {
				return item[1];
			}
		}
	}

	get Symbol() {
		const fn = (key) => {
			return this.get(key);
		};
		function define(key, value) {
			Object.defineProperty(fn, key, {value: value});
		}
		function defineReserved(key) {
			define(key, fn(key));
		}
		// Don't use [].forEach().
		// It may be undefined here.
		defineReserved('iterator');
		defineReserved('match');
		defineReserved('replace');
		defineReserved('search');
		defineReserved('split');
		defineReserved('hasInstance');
		defineReserved('isConcatSpreadable');
		defineReserved('unscopables');
		defineReserved('species');
		defineReserved('toPrimitive');
		defineReserved('toStringTag');
		define('for', (key) => {
			return this.for(key);
		});
		define('keyFor', (key) => {
			return this.keyFor(key);
		});
		return fn;
	}

}

export default new SymbolRegistry().Symbol;

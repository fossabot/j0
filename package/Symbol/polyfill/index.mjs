import Object from '../../Object';
import Date from '../../Date';
import isString from '../../isString';
import TypeError from '../../TypeError';
import window from '../../window';

class SymbolRegistry {

	constructor() {
		this.seed = Date.now();
		this.registry = [];
	}

	get(key = '') {
		const symbol = `Symbol(${key})${(this.seed + this.registry.length)}`;
		this.registry.push([symbol, key]);
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
			return this.get(key);
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
		function defineSymbol(key) {
			define(key, fn(key));
		}
		defineSymbol('iterator');
		defineSymbol('match');
		defineSymbol('replace');
		defineSymbol('search');
		defineSymbol('split');
		defineSymbol('hasInstance');
		defineSymbol('isConcatSpreadable');
		defineSymbol('unscopables');
		defineSymbol('species');
		defineSymbol('toPrimitive');
		defineSymbol('toStringTag');
		define('for', (key) => {
			return this.for(key);
		});
		define('keyFor', (key) => {
			return this.keyFor(key);
		});
		return fn;
	}

}

function polyfill() {
	if (!window.Symbol) {
		window.Symbol = new SymbolRegistry().Symbol;
	}
}

export default polyfill;

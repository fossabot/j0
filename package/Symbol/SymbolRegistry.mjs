import Object from '../Object';
import Date from '../Date';
import isString from '../isString';
import TypeError from '../TypeError';
import find from '../Array/find';

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
			return find(this.registry, function ([, symbolKey]) {
				return key === symbolKey;
			}) || this.get(key);
		}
		throw new TypeError(`Symbol.for was called with non-string: ${key}`);
	}

	keyFor(sym) {
		return find(this.registry, function ([symbol]) {
			return sym === symbol;
		});
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

export default SymbolRegistry;

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function noop(x) {
	return x;
}

function every(iterable, fn = noop, thisArg = iterable) {
	let index = 0;
	for (const value of iterable) {
		if (!fn.call(thisArg, value, index, iterable)) {
			return false;
		}
		index += 1;
	}
	return true;
}

function isString(x) {
	return typeof x === 'string';
}

var isString$1 = function (...args) {
	return every(args, isString);
};

function isFunction(x) {
	return typeof x === 'function';
}

var isFunction$1 = function (...args) {
	return every(args, isFunction);
};

function getMatcher(ref) {
	return function (value) {
		return ref === value;
	};
}

function find(iterable, fn = noop) {
	let index = 0;
	if (!isFunction$1(fn)) {
		fn = getMatcher(fn);
	}
	for (const item of iterable) {
		if (fn(item, index, iterable)) {
			return item;
		}
		index += 1;
	}
}

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
		if (isString$1(key)) {
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

let {Symbol} = window;

if (typeof Symbol !== 'function') {
	/* eslint-disable prefer-destructuring */
	Symbol = new SymbolRegistry().Symbol;
	/* eslint-enable prefer-destructuring */
	window.Symbol = Symbol;
}

var Symbol$1 = Symbol;

function polyfill$1() {
	if (!Array.prototype[Symbol$1.iterator]) {
		Array.prototype[Symbol$1.iterator] = function () {
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
		};
	}
}

polyfill$1();

/* global document, navigator */
function startMocha() {
	mocha.run().once('end', function () {
		document.body.classList.add(0 < this.stats.failures ? 'failed' : 'passed');
	});
}

function showEnvironment() {
	const environment = document.getElementById('environment');
	for (const propertyName of Object.keys(navigator.constructor.prototype)) {
		const tr = document.createElement('tr');
		const th = document.createElement('th');
		const td = document.createElement('td');
		const value = navigator[propertyName];
		tr.appendChild(th).textContent = propertyName;
		tr.appendChild(td).textContent = value;
		environment.appendChild(tr).classList.add(typeof value);
	}
}

if (mocha) {
	startMocha();
}
showEnvironment();

})));

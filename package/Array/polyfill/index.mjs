import Symbol from '../../Symbol';
import Array from '..';
import every from '../every/polyfill';
import arrayFrom from '../from/polyfill';
import arrayOf from '../of/polyfill';
import isArray from '../isArray/polyfill';

function polyfill() {
	if (!Array.from) {
		Array.from = arrayFrom;
	}
	if (!Array.of) {
		Array.of = arrayOf;
	}
	if (!Array.isArray) {
		Array.isArray = isArray;
	}
	if (!Array.prototype.every) {
		Array.prototype.every = every;
	}
	if (!Array.prototype[Symbol.iterator]) {
		Array.prototype[Symbol.iterator] = function () {
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

export default polyfill;

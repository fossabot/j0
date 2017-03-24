import Symbol from '../../Symbol';
import isNumber from '../../isNumber';
import isFunction from '../../isFunction';
import Object from '..';

function polyfill() {
	if (!Object.prototype[Symbol.iterator]) {
		Object.prototype[Symbol.iterator] = function () {
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
			throw new TypeError('This object is not iterable');
		};
	}
}

export default polyfill;

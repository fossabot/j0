import Symbol from '../../Symbol';
import isNumber from '../../isNumber';
import Object from '..';

function polyfill() {
	if (!Object.prototype[Symbol.iterator]) {
		Object.prototype[Symbol.iterator] = function () {
			if (isNumber(this.length)) {
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
			throw new TypeError('This object is not array-like');
		};
	}
}

export default polyfill;

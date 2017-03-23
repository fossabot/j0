import Symbol from '../../Symbol';
import Array from '..';

function polyfill() {
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

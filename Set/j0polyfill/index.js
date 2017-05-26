import {iteratorSymbol} from 'j0';

class Set {

	constructor(iterable) {
		this.clear();
		if (iterable) {
			for (const value of iterable) {
				this.add(value);
			}
		}
	}

	get size() {
		return this.data.length;
	}

	clear() {
		this.data = [];
	}

	indexOf(item) {
		return this.data.indexOf(item);
	}

	has(item) {
		return 0 <= this.indexOf(item);
	}

	add(item) {
		if (!this.has(item)) {
			this.data.push(item);
		}
		return this;
	}

	delete(item) {
		const index = this.indexOf(item);
		if (0 <= index) {
			this.data.splice(index, 1);
		}
		return 0 <= index;
	}

	forEach(fn, thisArg) {
		this.data
		.forEach((value) => {
			fn.call(thisArg, value, value, this);
		});
	}

	values() {
		return this.data[iteratorSymbol]();
	}

	[iteratorSymbol]() {
		return this.values();
	}

	entries() {
		const iterator = this.values();
		return {
			next: function () {
				const {value, done} = iterator.next();
				return {
					value: !done && [value, value],
					done
				};
			}
		};
	}

}

export default Set;

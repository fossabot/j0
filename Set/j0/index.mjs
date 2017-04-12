import forEach from '../../Array/forEach';
import push from '../../Array/push';
import splice from '../../Array/splice';
import iteratorKey from '../../Symbol/iterator';

class Set {

	constructor(iterable) {
		this.clear();
		if (iterable) {
			forEach(iterable, (value) => {
				this.add(value);
			});
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
			push(this.data, item);
		}
		return this;
	}

	delete(item) {
		const index = this.indexOf(item);
		if (0 <= index) {
			splice(this.data, index, 1);
		}
		return 0 <= index;
	}

	forEach(fn, thisArg) {
		forEach(this.data, (value) => {
			fn.call(thisArg, value, value, this);
		});
	}

	values() {
		return this.data[iteratorKey]();
	}

	[iteratorKey]() {
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

import Symbol from '../../Symbol';
import window from '../../window';
import includes from '../../Array/includes';
import push from '../../Array/push';
import findIndex from '../../Array/findIndex';
import splice from '../../Array/splice';
import forEach from '../../Array/forEach';
import slice from '../../Array/slice';

class Set {

	constructor() {
		this.clear();
	}

	get size() {
		return this.data.length;
	}

	clear() {
		this.data = [];
	}

	has(value) {
		return includes(this.data, value);
	}

	add(value) {
		if (!this.has(value)) {
			push(this.data, value);
		}
		return this;
	}

	delete(value) {
		const index = findIndex(this.data, value);
		if (0 <= index) {
			splice(this.data, index, 1);
		}
		return 0 <= index;
	}

	entries() {
		return this.data[Symbol.iterator]();
	}

	forEach(fn, thisArg) {
		forEach(this.data, fn, thisArg);
	}

	values() {
		return slice(this.data);
	}

}

if (!window.Set) {
	window.Set = Set;
	Set.prototype[Symbol.iterator] = function () {
		return this.entries();
	};
}

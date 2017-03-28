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
		const index = findIndex(this.data, function (item) {
			return item === value;
		});
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
}
(function (prototype) {
	if (Object.prototype[Symbol.iterator] === prototype[Symbol.iterator]) {
		prototype[Symbol.iterator] = function () {
			return this.entries();
		};
	}
	if (!prototype.entries) {
		prototype.entries = function () {
			const result = [];
			this.forEach(function (value) {
				result[result.length] = value;
			});
			const {length} = result;
			let index = 0;
			return {
				next: function () {
					const value = result[index];
					index += 1;
					return {
						value: value,
						done: length < index
					};
				}
			};
		};
	}
	if (!prototype.has) {
		prototype.has = function (value) {
			let result = false;
			this.forEach(function (item) {
				if (!result && item === value) {
					result = true;
				}
			});
			return result;
		};
	}
}(window.Set.prototype));

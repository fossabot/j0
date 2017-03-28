import Symbol from '../../Symbol';
import Object from '../../Object';
import window from '../../window';
import map from '../../Array/map';
import find from '../../Array/find';
import findIndex from '../../Array/findIndex';
import push from '../../Array/push';
import splice from '../../Array/splice';
import forEach from '../../Array/forEach';

class Map {

	constructor() {
		this.clear();
	}

	clear() {
		this.data = [];
		this.size = 0;
	}

	indexOfKey(key) {
		return findIndex(this.data, function ([itemKey]) {
			return itemKey === key;
		});
	}

	has(key) {
		return 0 <= this.indexOfKey(key);
	}

	set(key, value) {
		const index = this.indexOfKey(key);
		if (0 <= index) {
			this.data[index][1] = value;
		} else {
			push(this.data, [key, value]);
		}
		return this;
	}

	get(key) {
		const found = find(this.data, function ([itemKey]) {
			return itemKey === key;
		});
		if (found) {
			return found[1];
		}
	}

	delete(key) {
		const index = this.indexOfKey(key);
		if (0 <= index) {
			splice(this.data, index, 1);
			return true;
		}
		return false;
	}

	entries() {
		return this.data[Symbol.iterator]();
	}

	forEach(fn, thisArg) {
		forEach(this.data, fn, thisArg);
	}

	keys() {
		return map(this.data, function ([key]) {
			return key;
		});
	}

	values() {
		return map(this.data, function ([, value]) {
			return value;
		});
	}

}

if (!window.Map) {
	window.Map = Map;
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
			this.forEach(function (value, key) {
				result[result.length] = [key, value];
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
	if (!prototype.keys) {
		prototype.keys = function () {
			const result = [];
			this.forEach(function (value, key) {
				result[result.length] = key;
			});
			return result;
		};
	}
	if (!prototype.values) {
		prototype.values = function () {
			const result = [];
			this.forEach(function (value) {
				result[result.length] = value;
			});
			return result;
		};
	}
}(window.Map.prototype));

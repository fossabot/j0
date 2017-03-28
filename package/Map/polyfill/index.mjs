import Symbol from '../../Symbol';
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
		if (index < 0) {
			push(this.data, [key, value]);
		} else {
			this.data[index][1] = value;
		}
		return this;
	}

	get(key) {
		return find(this.data, function ([itemKey]) {
			return itemKey === key;
		});
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
	Map.prototype[Symbol.iterator] = function () {
		return this.entries();
	};
}

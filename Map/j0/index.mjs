import Symbol from '../../Symbol';
import map from '../../Array/map';
import find from '../../Array/find';
import findIndex from '../../Array/findIndex';
import push from '../../Array/push';
import splice from '../../Array/splice';
import forEach from '../../Array/forEach';

class Map {

	constructor(iterable) {
		this.clear();
		if (iterable) {
			forEach(iterable, ([key, value]) => {
				this.set(key, value);
			});
		}
	}

	clear() {
		this.data = [];
	}

	get size() {
		return this.data.length;
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
		const iterator = this.entries();
		return {
			next: function () {
				const {value, done} = iterator.next();
				return {
					value: value && value[0],
					done
				};
			}
		};
	}

	values() {
		const iterator = this.entries();
		return {
			next: function () {
				const {value, done} = iterator.next();
				return {
					value: value && value[1],
					done
				};
			}
		};
	}

}

export default Map;

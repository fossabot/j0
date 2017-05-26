import {
	Symbol,
	Iterator
} from 'j0';

class Map {

	constructor(iterable) {
		this.clear();
		if (iterable) {
			for (const [key, value] of iterable) {
				this.set(key, value);
			}
		}
	}

	clear() {
		this.data = [];
	}

	get size() {
		return this.data.length;
	}

	indexOfKey(key) {
		return this.data
		.findIndex(function ([itemKey]) {
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
			this.data.push([key, value]);
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
			this.data.splice(index, 1);
			return true;
		}
		return false;
	}

	entries() {
		return this.data[Symbol.iterator]();
	}

	forEach(fn, thisArg) {
		this.data.forEach(fn, thisArg);
	}

	keys() {
		const iterator = this.entries();
		return new Iterator(() => {
			const {value, done} = iterator.next();
			return {
				value: value && value[0],
				done
			};
		});
	}

	values() {
		const iterator = this.entries();
		return new Iterator(() => {
			const {value, done} = iterator.next();
			return {
				value: value && value[1],
				done
			};
		});
	}

}

export default Map;

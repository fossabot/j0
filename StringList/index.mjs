import map from '../Array/map';
import push from '../Array/push';
import filter from '../Array/filter';
import findIndex from '../Array/findIndex';
import find from '../Array/find';
import forEach from '../Array/forEach';
import iteratorKey from '../Symbol/iterator';

class StringList {

	constructor(iterable) {
		this.clear();
		if (iterable) {
			map(iterable, ([key, value]) => {
				this.append(key, value);
			});
		}
	}

	clear() {
		this.data = [];
	}

	indexOf(name) {
		return findIndex(this.data, function ([itemName]) {
			return itemName === name;
		});
	}

	has(name) {
		return 0 <= this.indexOf(name);
	}

	append(name, value) {
		push(this.data, [name, value]);
	}

	set(name, value) {
		const index = this.indexOf(name);
		if (index < 0) {
			this.append(name, value);
		} else {
			this.data[index][1] = value;
		}
	}

	delete(name) {
		this.data = filter(this.data, function ([itemName]) {
			return itemName !== name;
		});
	}

	get(name) {
		const found = find(this.data, function ([itemName]) {
			return itemName === name;
		});
		return found ? found[1] : null;
	}

	getAll(name) {
		const result = [];
		forEach(this.data, function ([itemName, value]) {
			if (itemName === name) {
				push(result, value);
			}
		});
		return result;
	}

	toString() {
		return map(this.data, function ([name, value = '']) {
			return `${name}:${value}`;
		}).join(',');
	}

	entries() {
		return this.data[iteratorKey]();
	}

	values() {
		const iterator = this.entries();
		return {
			next: function () {
				const {
					value,
					done
				} = iterator.next();
				return {
					value: value && value[1],
					done
				};
			}
		};
	}

	[iteratorKey]() {
		return this.entries();
	}

}

export default StringList;

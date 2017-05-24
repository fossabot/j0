import {iteratorSymbol} from 'j0';

class StringList {

	constructor(iterable) {
		this.clear();
		if (iterable) {
			for (const [key, value] of iterable) {
				this.append(key, value);
			}
		}
	}

	clear() {
		this.data = [];
	}

	indexOf(name) {
		return this.data.findIndex(function ([itemName]) {
			return itemName === name;
		});
	}

	has(name) {
		return 0 <= this.indexOf(name);
	}

	append(name, value) {
		this.data.push([name, value]);
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
		this.data = this.data
		.filter(function ([itemName]) {
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
		this.data
		.forEach(function ([itemName, value]) {
			if (itemName === name) {
				result.push(value);
			}
		});
		return result;
	}

	toString() {
		return this.data
		.map(function ([name, value = '']) {
			return `${name}:${value}`;
		}).join(',');
	}

	entries() {
		return this.data[iteratorSymbol]();
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

	[iteratorSymbol]() {
		return this.entries();
	}

}

export default StringList;

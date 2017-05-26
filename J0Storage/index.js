import {Object} from 'j0';

class J0Storage {

	get length() {
		return Object.keys(this).length;
	}

	clear() {
		Object.keys(this)
		.forEach((key) => {
			this.removeItem(key);
		});
	}

	getItem(keyName) {
		return this[keyName];
	}

	key(n) {
		return Object.keys(this)[n];
	}

	removeItem(keyName) {
		delete this[keyName];
	}

	setItem(keyName, keyValue) {
		this[keyName] = `${keyValue}`;
	}

}

export default J0Storage;

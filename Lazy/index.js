import {
	isUndefined
} from 'j0';

class Lazy {

	getLazy(key, getter, force) {
		let value = this[key];
		if (force || isUndefined(value)) {
			value = getter();
			this[key] = value;
		}
		return value;
	}

}

export default Lazy;

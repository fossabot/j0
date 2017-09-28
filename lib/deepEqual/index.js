import {
	keys,
	isObject,
} from 'j0';

function deepEqual(a, b) {
	if (isObject(a) && isObject(b)) {
		return keys(a)
		.every((key) => {
			return deepEqual(a[key], b[key]);
		});
	} else {
		return a === b;
	}
}

export default deepEqual;

import {
	keys,
	isObject,
	isArray
} from 'j0';

function forEachItem(data, fn) {
	if (isArray(data)) {
		data
		.forEach((args) => {
			fn(args);
		});
	} else if (isObject(data)) {
		keys(data)
		.forEach((key) => {
			fn([key, data[key]]);
		});
	}
}

export default forEachItem;

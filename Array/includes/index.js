import forEach from '../forEach';

function includes(iterable, searchElement, fromIndex) {
	let result = false;
	forEach(iterable, function (value) {
		result = value === searchElement;
		return result;
	}, null, fromIndex);
	return result;
}

export default includes;

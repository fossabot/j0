import forEach from '../../forEach';

function includes(searchElement, fromIndex) {
	let result = false;
	forEach(this, function (value) {
		result = value === searchElement;
		return result;
	}, null, fromIndex);
	return result;
}

export default includes;

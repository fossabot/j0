function leftpad(x, length = 2, c = '0') {
	let result = x.toString();
	while (x.length < length) {
		result = c + result;
	}
	return result;
}

export default leftpad;

function leftpad(x, length = 2, padChar = '0') {
	const s = x.toString();
	const pad = length - s.length;
	return 0 < pad ? `${padChar.charAt(0).repeat(pad)}${s}` : s;
}

export default leftpad;

import {parseInt} from 'j0';

const suffixes = ['th', 'st', 'nd', 'rd'];
const TEN = 10;
const HUNDRED = 100;

function getOrdinalSuffix(n) {
	let type = n % TEN;
	const r2 = n % HUNDRED;
	if ((10 < r2 && r2 < 20) || 3 < type) {
		type = 0;
	}
	return suffixes[type];
}

function toOrdinalString(n, radix) {
	const i = parseInt(n, radix);
	return `${i}${getOrdinalSuffix(i)}`;
}

export default toOrdinalString;

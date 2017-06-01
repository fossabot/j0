import {
	isNaN
} from 'j0';
function sign(x) {
	x = +x;
	if (x === 0 || isNaN(x)) {
		return x;
	}
	return x > 0 ? 1 : -1;
}
export default sign;

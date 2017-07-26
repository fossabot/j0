import {Math} from 'j0';
function asinh(x) {
	if (x === -Infinity) {
		return x;
	}
	return Math.log(x + Math.sqrt(x * x + 1));
}
export default asinh;

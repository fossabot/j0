import {Math} from 'j0';
function tanh(x) {
	if (x === Infinity) {
		return 1;
	} else if (x === -Infinity) {
		return -1;
	}
	const y = Math.exp(2 * x);
	return (y - 1) / (y + 1);
}
export default tanh;

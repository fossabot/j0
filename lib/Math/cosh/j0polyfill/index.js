import {Math} from 'j0';
function cosh(x) {
	const y = Math.exp(x);
	return (y + 1 / y) / 2;
}
export default cosh;

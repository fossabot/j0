import {Math} from 'j0';
function atanh(x) {
	return Math.log((1 + x) / (1 - x)) / 2;
}
export default atanh;

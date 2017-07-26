import {Math} from 'j0';
function acosh(x) {
	return Math.log(x + Math.sqrt(x * x - 1));
}
export default acosh;

/* eslint no-magic-numbers: ["warn", {ignore: [0, 1, 3]}] */
import {Math} from 'j0';
function cbrt(x) {
	const root = Math.pow(Math.abs(x), 1 / 3);
	return x < 0 ? -root : root;
}
export default cbrt;

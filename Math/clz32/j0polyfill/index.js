/* eslint no-magic-numbers: ["warn", {ignore: [-1, 0, 1, 31, 32]}], no-bitwise: "off" */
import {Math} from 'j0';
function clz32(x) {
	if (x <= -1) {
		return 0;
	}
	if (x === null || x <= 1) {
		return 32;
	}
	return 31 - Math.floor(Math.log(x >>> 0) * Math.LOG2E);
}
export default clz32;

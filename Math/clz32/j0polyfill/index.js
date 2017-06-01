/* eslint no-magic-numbers: ["warn", {ignore: [0, 31, 32]}], no-bitwise: "off" */
import {Math} from 'j0';
function clz32(x) {
	if (x === null || x === 0) {
		return 32;
	}
	return 31 - Math.floor(Math.log(x >>> 0) * Math.LOG2E);
}
export default clz32;

import {Float32Array} from 'j0';
function fround(x) {
	return new Float32Array([x])[0];
}
export default fround;

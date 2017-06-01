import {Math} from 'j0';
function hypot(...args) {
	let sum = 0;
	for (let i = 0, {length} = args; i < length; i++) {
		const value = args[i];
		sum += value * value;
	}
	return Math.sqrt(sum);
}
export default hypot;

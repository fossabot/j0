import {Iterator} from 'j0';

function generator() {
	const array = this.slice();
	const {length} = array;
	let index = 0;
	return new Iterator(() => {
		return {
			value: array[index],
			done: length <= index++
		};
	});
}

export default generator;

import {Iterator} from 'j0';

function generator() {
	const {length} = this;
	let index = 0;
	return new Iterator(() => {
		return {
			value: this[index],
			done: length <= index++
		};
	});
}

export default generator;

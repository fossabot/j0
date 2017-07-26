import {Iterator} from 'j0';

function entries() {
	let index = 0;
	return new Iterator(() => {
		return {
			value: [index, this[index]],
			done: this.length < ++index
		};
	});
}

export default entries;

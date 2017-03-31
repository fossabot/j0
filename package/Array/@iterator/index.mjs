function generator() {
	const {length} = this;
	let index = 0;
	return {
		next: () => {
			return {
				value: this[index],
				done: length <= index++
			};
		}
	};
}

export default generator;

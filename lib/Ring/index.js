class Ring {

	constructor(array) {
		this.array = array;
	}

	get(index) {
		return Ring.get(this.array, index);
	}

	rotate(index) {
		Ring.rotate(this.array, index);
		return this;
	}

	static getIndex(array, index) {
		const length = array.length;
		return (index < 0 ? length + (index % length) : index) % length;
	}

	static get(array, index) {
		return array[Ring.getIndex(array, index)];
	}

	static rotate(array, index) {
		const offset = Ring.getIndex(array, index);
		for (let i = 0; i < offset; i++) {
			array.push(array.shift());
		}
		return array;
	}

}

export default Ring;

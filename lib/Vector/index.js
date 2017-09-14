import {
	Math,
} from 'j0';

class Vector {

	constructor(array) {
		this.array = array.slice();
	}

	get(index) {
		return this.array[index];
	}

	set(index, value) {
		this.array[index] = value;
		return this;
	}

	get dim() {
		return this.array.length;
	}

	get norm() {
		return Math.hypot.apply(null, this.array);
	}

	set norm(norm) {
		this.array = this.scale(norm / this.norm).array;
	}

	add(...vectors) {
		return new Vector(
			this.array.map((component, index) => {
				return vectors.reduce((sum, vector) => {
					return sum + vector.get(index);
				}, component);
			})
		);
	}

	subtract(...vectors) {
		return new Vector(
			this.array.map((component, index) => {
				return vectors.reduce((sum, vector) => {
					return sum - vector.get(index);
				}, component);
			})
		);
	}

	scale(scalar) {
		return new Vector(
			this.array.map((component) => {
				return component * scalar;
			})
		);
	}

	toString(digits = 2, separator = ',') {
		return this.array.map((x) => {
			return x.toFixed(digits);
		})
		.join(separator);
	}

}

export default Vector;

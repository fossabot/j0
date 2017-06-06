import {
	Error
} from 'j0';

const operators = {
	'=': function (x, y) {
		return x === y;
	},
	'<': function (x, y) {
		return x < y;
	},
	'<=': function (x, y) {
		return x <= y;
	},
	'>': function (x, y) {
		return x > y;
	},
	'>=': function (x, y) {
		return x >= y;
	}
};

class Comparator {

	constructor(operator, y) {
		this.operator = operators[operator];
		if (!this.operator) {
			throw new Error(`Unknown operator: ${operator}`);
		}
		this.y = y;
	}

	test(x) {
		return this.operator(x, this.y);
	}

}

export default Comparator;

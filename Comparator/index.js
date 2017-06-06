import {
	Error,
	Symbol,
	Object,
	isInstanceOf
} from 'j0';

const OPERATOR = Symbol('OPERATOR');
const NOT = Symbol('NOT');

function EQ(x, y) {
	return x === y;
}
function NEQ(x, y) {
	return x !== y;
}
function LT(x, y) {
	return x < y;
}
function LTE(x, y) {
	return x <= y;
}
function GT(x, y) {
	return x > y;
}
function GTE(x, y) {
	return x >= y;
}

EQ[NOT] = NEQ;
NEQ[NOT] = EQ;
LT[NOT] = GTE;
LTE[NOT] = GT;
GT[NOT] = LTE;
GTE[NOT] = LT;

const operators = {
	'=': EQ,
	'!=': NEQ,
	'<': LT,
	'<=': LTE,
	'>': GT,
	'>=': GTE
};

class Comparator {

	constructor(operator, value) {
		if (isInstanceOf(operator, Comparator)) {
			Object.assign(this, operator);
		} else {
			this.fn = operators[operator];
			if (!this.fn) {
				throw new Error(`Unknown operator: ${operator}`);
			}
			this.operator = operator;
			this.value = value;
		}
	}

	test(x) {
		return this.fn(x, this.value);
	}

	not() {
		return new Comparator(this.fn[NOT][OPERATOR], this.value);
	}

	toString() {
		return `${this.operator} ${this.value}`;
	}

	equals(x) {
		return `${this}` === `${x}`;
	}

}

Object.keys(operators)
.forEach(function (key) {
	operators[key][OPERATOR] = key;
});

export default Comparator;

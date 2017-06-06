import {
	Symbol,
	Object,
	isInstanceOf
} from 'j0';

const AND = Symbol('AND');
const OR = Symbol('OR');
const XOR = Symbol('XOR');
const NOT = Symbol('NOT');
const SOLO = Symbol('SOLO');
const keys = {
	AND,
	OR,
	XOR,
	NOT,
	SOLO
};
const nestable = [
	AND,
	OR,
	XOR,
	NOT
];

function execute(condition, args) {
	if (condition.includes) {
		return condition.includes(...args);
	}
	return condition(...args);
}

const operators = {
	[SOLO]: function ([condition], ...args) {
		return execute(condition, args);
	},
	[AND]: function (conditions, ...args) {
		return conditions
		.every((condition) => {
			return execute(condition, args);
		});
	},
	[OR]: function (conditions, ...args) {
		return 0 <= conditions
		.findIndex((condition) => {
			return execute(condition, args);
		});
	},
	[XOR]: function (conditions, ...args) {
		return conditions
		.filter((condition) => {
			return execute(condition, args);
		})
		.length === 1;
	},
	[NOT]: function (conditions, ...args) {
		return conditions
		.findIndex((condition) => {
			return execute(condition, args);
		}) < 0;
	}
};

class ConditionalSet {

	constructor(operator, ...conditions) {
		this.operator = operators[operator];
		if (!this.operator) {
			throw new Error(`Unknown operator: ${operator}`);
		} else if (this.operator === SOLO && conditions.length !== 1) {
			throw new Error(`Invalid condition count: ${conditions.length}`);
		}
		this.conditions = conditions;
		Object.assign(this, keys);
		this.normalize();
	}

	includes(...args) {
		return this.operator(this.conditions, ...args);
	}

	normalize() {
		const {conditions, operator} = this;
		if (!nestable.includes(operator)) {
			return;
		}
		for (let i = 0; i < conditions.length; i++) {
			const condition = conditions[i];
			if (isInstanceOf(condition, ConditionalSet)) {
				if (condition.operator === operator) {
					switch (operator) {
					case AND:
					case OR:
					case XOR:
						operators.splice(i, 1, ...condition.conditions);
						break;
					default:
					}
				} else if (condition.operator === SOLO) {
					operators.splice(i, 1, ...condition.conditions);
				}
			}
		}
	}

}
Object.assign(ConditionalSet, keys);
export default ConditionalSet;

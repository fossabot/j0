/* eslint-disable no-magic-numbers, max-len, newline-per-chained-call */

import Comparator from '..';

describe('Comparator', function () {

	[
		{
			operator: '=',
			not: '!=',
			tests: [
				{
					y: 0,
					xValues: [
						[-1, false],
						[0, true],
						[1, false]
					]
				}
			]
		},
		{
			operator: '!=',
			not: '=',
			tests: [
				{
					y: 0,
					xValues: [
						[-1, true],
						[0, false],
						[1, true]
					]
				}
			]
		},
		{
			operator: '<',
			not: '>=',
			tests: [
				{
					y: 1,
					xValues: [
						[-1.0, true],
						[0.9, true],
						[1.0, false],
						[1.1, false]
					]
				}
			]
		},
		{
			operator: '<=',
			not: '>',
			tests: [
				{
					y: 1,
					xValues: [
						[-1.0, true],
						[0.9, true],
						[1.0, true],
						[1.1, false]
					]
				}
			]
		},
		{
			operator: '>',
			not: '<=',
			tests: [
				{
					y: 1,
					xValues: [
						[-1.0, false],
						[0.9, false],
						[1.0, false],
						[1.1, true]
					]
				}
			]
		},
		{
			operator: '>=',
			not: '<',
			tests: [
				{
					y: 1,
					xValues: [
						[-1.0, false],
						[0.9, false],
						[1.0, true],
						[1.1, true]
					]
				}
			]
		}
	]
	.forEach(({operator, not, tests}) => {

		tests
		.forEach(({xValues, y}) => {

			it(`new Comparator('${operator}', 0).operator should be ${operator}`, function () {
				assert.equal(new Comparator(operator, y).operator, operator);
			});

			it(`new Comparator('${operator}', 0).toString() should return ${operator} ${y}`, function () {
				assert.equal(`${new Comparator(operator, y)}`, `${operator} ${y}`);
			});

			it(`new Comparator('${operator}', ${y}).value should be ${y}`, function () {
				assert.equal(new Comparator(operator, y).value, y);
			});

			it(`new Comparator(new Comparator('${operator}', ${y})).toString() should return ${operator} ${y}`, function () {
				assert.equal(`${new Comparator(new Comparator(operator, y))}`, `${operator} ${y}`);
			});

			it(`new Comparator('${operator}', ${y})).equals() should return true if the argument is itself`, function () {
				const comparator = new Comparator(operator, y);
				assert.equal(comparator.equals(comparator), true);
			});

			it(`new Comparator('${operator}', ${y})).not() should be different from the original`, function () {
				const comparator = new Comparator(operator, y);
				assert.equal(comparator.not().equals(comparator), false);
			});

			it(`new Comparator('${operator}', ${y})).not().not() should equal the original`, function () {
				const comparator = new Comparator(operator, y);
				assert.equal(comparator.not().not().equals(comparator), true);
			});

			xValues
			.forEach(([x, expected]) => {

				it(`new Comparator('${operator}', ${y}).test(${x}) should return ${expected}`, function () {
					assert.equal(new Comparator(operator, y).test(x), expected);
				});

			});

		});

	});

});

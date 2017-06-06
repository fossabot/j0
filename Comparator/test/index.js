/* eslint-disable no-magic-numbers */

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

		it(`new Comparator('${operator}', 0).operator should be ${operator}`, function () {
			assert.equal(new Comparator(operator, 0).operator, operator);
		});

		it(`new Comparator('${operator}', 0).toString() should return ${operator} 0`, function () {
			assert.equal(`${new Comparator(operator, 0)}`, `${operator} 0`);
		});

		it(`new Comparator('${operator}', 0).not().toString() should return ${not} 0`, function () {
			assert.equal(`${new Comparator(operator, 0).not()}`, `${not} 0`);
		});

		tests
		.forEach(({xValues, y}) => {

			it(`new Comparator('${operator}', ${y}).value should be ${y}`, function () {
				assert.equal(new Comparator(operator, y).value, y);
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

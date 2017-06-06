/* eslint-disable no-magic-numbers */

import Comparator from '..';

describe('Comparator', function () {

	[
		{
			operator: '=',
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
			operator: '<',
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
	.forEach(({operator, tests}) => {

		tests
		.forEach(({xValues, y}) => {

			xValues
			.forEach(([x, expected]) => {

				it(`new Comparator('${operator}', '${y}').test(${x}) should return ${expected}`, function () {
					assert.equal(new Comparator(operator, y).test(x), expected);
				});


			});

		});

	});

});

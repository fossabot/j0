import thermalRGB from '../index.js';

describe('thermalRGB', function () {

	[
		[0.00, [0, 0, 1]],
		[0.50, [0, 0.8, 0]],
		[1.00, [1, 0, 0]],
	]
	.forEach(([value, expected]) => {
		it(`thermalRGB(${value}) → [${expected.join(', ')}]`, function () {
			assert.deepEqual(thermalRGB(value), expected);
		});
	});

	it('should return an array of numbers', function () {
		assert.deepEqual(thermalRGB(0), [0, 0, 1]);
		assert.deepEqual(thermalRGB(1), [1, 0, 0]);
	});

	describe('thermalRGB.css', function () {

		[
			[0.00, 'rgb(0,0,255)'],
			[0.25, 'rgb(0,76,128)'],
			[0.50, 'rgb(0,204,0)'],
			[0.75, 'rgb(128,76,0)'],
			[1.00, 'rgb(255,0,0)'],
		]
		.forEach(([value, expected]) => {
			it(`thermalRGB.css(${value}) → ${expected}`, function () {
				assert.equal(thermalRGB.css(value), expected);
			});
		});

	});

});

import thermalRGB from '..';

describe('thermalRGB', function () {

	it('should return an array of numbers', function () {
		assert.deepEqual(thermalRGB(0), [0, 0, 1]);
		assert.deepEqual(thermalRGB(1), [1, 0, 0]);
	});

	describe('thermalRGB.css', function () {

		it('should return a string', function () {
			assert.deepEqual(thermalRGB.css(0), 'rgb(0,0,255)');
			assert.deepEqual(thermalRGB.css(1), 'rgb(255,0,0)');
		});

	});

});

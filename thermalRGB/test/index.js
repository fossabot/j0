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

		it('[id:thermalRGB] should draw an expected map', async function () {
			const timeout = 5000;
			this.timeout(timeout);
			await assert.graphicalEqual({
				name: 'thermalRGB',
				url: `${window.root}/thermalRGB/thermalRGB.png`,
				fn: function (x, y) {
					return y;
				},
				xRange: [0, 1],
				yRange: [0, 1],
				zRange: [0, 1],
				xGrid: [],
				yGrid: []
			});
		});

	});

});

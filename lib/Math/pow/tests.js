import {
	window,
} from 'j0';
function test(pow, name = 'Math.pow') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/pow/pow.png`,
				fn: function (x) {
					return pow(2, x);
				},
				xRange: [-2, 2],
				yRange: [0, 4],
				xGrid: [-1, 0, 1],
				yGrid: [1, 2, 3]
			});
		});

	});

}
export default test;

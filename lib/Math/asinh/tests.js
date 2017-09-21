import {
	window,
} from 'j0';
function test(asinh, name = 'Math.asinh') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/asinh/asinh.png`,
				fn: asinh,
				xRange: [-16, 16],
				yRange: [-4, 4],
				xGrid: [-15, -10, -5, 0, 5, 10, 15],
				yGrid: [-3, -2, -1, 0, 1, 2, 3]
			});
		});

	});

}
export default test;

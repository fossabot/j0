import {
	window,
} from 'j0';
function test(tan, name = 'Math.tan') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/tan/tan.png`,
				fn: tan,
				xRange: [0, 2 * Math.PI],
				yRange: [-5, 5],
				xGrid: [
					0.5 * Math.PI,
					1.0 * Math.PI,
					1.5 * Math.PI
				],
				yGrid: [-2, -1, 0, 1, 2]
			});
		});

	});

}
export default test;

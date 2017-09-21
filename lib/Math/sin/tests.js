import {
	window,
} from 'j0';
function test(sin, name = 'Math.sin') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/sin/sin.png`,
				fn: sin,
				xRange: [0, 2 * Math.PI],
				yRange: [-1, 1],
				xGrid: [
					0.5 * Math.PI,
					1.0 * Math.PI,
					1.5 * Math.PI
				],
				yGrid: [-0.5, 0, 0.5]
			});
		});

	});

}
export default test;

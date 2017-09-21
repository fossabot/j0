import {
	window,
} from 'j0';
function test(cbrt, name = 'Math.cbrt') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/cbrt/cbrt.png`,
				fn: cbrt,
				xRange: [-64, 64],
				yRange: [-4, 4],
				xGrid: [-27, -8, 0, 8, 27],
				yGrid: [-3, -2, -1, 0, 1, 2, 3]
			});
		});

	});

}
export default test;

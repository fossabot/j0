import {
	window,
} from 'j0';
function test(expm1, name = 'Math.expm1') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/expm1/expm1.png`,
				fn: expm1,
				xRange: [-10, 3],
				yRange: [-1, 8],
				xGrid: [0, 1],
				yGrid: [0, Math.E - 1]
			});
		});

	});

}
export default test;

import {
	window,
} from 'j0';
function test(abs, name = 'Math.abs') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/abs/abs.png`,
				fn: abs,
				xRange: [-1, 1],
				yRange: [-1, 1],
				xGrid: [0],
				yGrid: [0]
			});
		});

	});

}
export default test;

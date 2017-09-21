import {
	window,
} from 'j0';
function test(log1p, name = 'Math.log1p') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/log1p/log1p.png`,
				fn: log1p,
				xRange: [-1, 9],
				yRange: [-10, 4],
				xGrid: [1 / Math.E - 1, 0, Math.E - 1],
				yGrid: [-1, 0, 1]
			});
		});

	});

}
export default test;

import {
	window,
} from 'j0';
function test(log10, name = 'Math.log10') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/log10/log10.png`,
				fn: log10,
				xRange: [0, 100],
				yRange: [-5, 2],
				xGrid: [0.1, 1, 10],
				yGrid: [-1, 0, 1]
			});
		});

	});

}
export default test;

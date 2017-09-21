import {
	window,
} from 'j0';
function test(asin, name = 'Math.asin') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/asin/asin.png`,
				fn: asin,
				xRange: [-1, 1],
				yRange: [-Math.PI / 2, Math.PI / 2],
				xGrid: [-0.5, 0, 0.5],
				yGrid: [0]
			});
		});

	});

}
export default test;

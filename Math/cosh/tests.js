/* eslint-disable no-magic-numbers */
function test(cosh, name = 'Math.cosh') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/cosh/cosh.png`,
				fn: cosh,
				xRange: [-12, 12],
				yRange: [0, 25000],
				xGrid: [-10, -5, 0, 5, 10],
				yGrid: [5000, 10000, 15000, 20000]
			});
		});

	});

}
export default test;

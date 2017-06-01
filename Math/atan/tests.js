/* eslint-disable no-magic-numbers */
function test(atan, name = 'Math.atan') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/atan/atan.png`,
				fn: atan,
				xRange: [-10, 10],
				yRange: [-Math.PI / 2, Math.PI / 2],
				xGrid: [-1, 0, 1],
				yGrid: [0]
			});
		});

	});

}
export default test;

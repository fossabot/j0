/* eslint-disable no-magic-numbers */
function test(hypot, name = 'Math.hypot') {

	describe(name, function () {

		it(`[id:${name}-y=3] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name: `${name}-y=3`,
				url: `${window.root}/Math/hypot/hypot3.png`,
				fn: function (x) {
					return hypot(x, 3);
				},
				xRange: [-6, 6],
				yRange: [2, 8],
				xGrid: [-4, -2, 0, 2, 4],
				yGrid: [3, 4, 5, 6, 7]
			});
		});

	});

}
export default test;

/* eslint-disable no-magic-numbers */
function test(hypot, name = 'Math.hypot') {

	describe(name, function () {

		it(`[id:${name}-y=3] should draw expected graph`, async function () {
			this.timeout(5000);
			await assert.graphicalEqual({
				name: `${name}-y=3`,
				url: `${window.root}/Math/hypot/hypot-y=3.png`,
				fn: function (x, y) {
					return hypot(x, y);
				},
				xRange: [-1, 1],
				yRange: [-1, 1],
				zRange: [0, 1]
			});
		});

	});

}
export default test;

/* eslint-disable no-magic-numbers */
function test(ceil, name = 'Math.ceil') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/ceil/ceil.png`,
				fn: ceil,
				xRange: [-5, 5],
				yRange: [-5, 5],
				xGrid: [-4, -3, -2, -1, 0, 1, 2, 3, 4],
				yGrid: [-4, -3, -2, -1, 0, 1, 2, 3, 4]
			});
		});

	});

}
export default test;
/* eslint-disable no-magic-numbers */
function test(acos, name = 'Math.acos') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/acos/acos.png`,
				fn: acos,
				xRange: [-1, 1],
				yRange: [0, Math.PI],
				xGrid: [-0.5, 0, 0.5],
				yGrid: [Math.PI / 2]
			});
		});

	});

}
export default test;

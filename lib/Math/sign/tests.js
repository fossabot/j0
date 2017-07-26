/* eslint-disable no-magic-numbers */
function test(sign, name = 'Math.sign') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/sign/sign.png`,
				fn: sign,
				xRange: [-3, 3],
				yRange: [-1.1, 1.1],
				xGrid: [-2, -1, 0, 1, 2],
				yGrid: [-1, 0, 1]
			});
		});

	});

}
export default test;

/* eslint-disable no-magic-numbers */
function test(clz32, name = 'Math.clz32') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/clz32/clz32.png`,
				fn: clz32,
				xRange: [0, 0xffffff],
				yRange: [0, 33],
				xGrid: [0x1fffff, 0x7fffff],
				yGrid: [1, 10, 20, 30]
			});
		});

	});

}
export default test;

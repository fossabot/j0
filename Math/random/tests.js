/* eslint-disable no-magic-numbers */
function test(random, name = 'Math.random') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			try {
				await assert.graphicalEqual({
					name,
					url: `${window.root}/Math/random/random.png`,
					fn: random,
					xRange: [0, 1],
					yRange: [0, 1],
					xGrid: [],
					yGrid: [0.5]
				});
			} catch (error) {
				return error;
			}
		});

	});

}
export default test;

/* eslint-disable no-magic-numbers */
function test(sinh, name = 'Math.sinh') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/sinh/sinh.png`,
				fn: sinh,
				xRange: [-12, 12],
				yRange: [-5000, 5000],
				xGrid: [-10, -5, 0, 5, 10],
				yGrid: [
					-4000,
					-2000,
					0,
					2000,
					4000
				]
			});
		});

	});

}
export default test;

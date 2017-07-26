/* eslint-disable no-magic-numbers */
function test(fround, name = 'Math.fround') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			const d = 1;
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/fround/fround.png`,
				fn: fround,
				xRange: [-d, d],
				yRange: [-d, d],
				xGrid: [-d / 2, 0, d / 2],
				yGrid: [-d / 2, 0, d / 2]
			});
		});

		it('should return 1.3370000123977661', function () {
			assert.equal(fround(1.337), 1.3370000123977661);
		});

	});

}
export default test;

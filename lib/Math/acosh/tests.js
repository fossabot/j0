import {
	window,
} from 'j0';
function test(acosh, name = 'Math.acosh') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/acosh/acosh.png`,
				fn: acosh,
				xRange: [0, 10],
				yRange: [0, 4],
				xGrid: [1, 3, 5, 7, 9],
				yGrid: [1, 2, 3]
			});
		});

	});

}
export default test;

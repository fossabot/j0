import {
	window,
} from 'j0';
function test(sqrt, name = 'Math.sqrt') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/sqrt/sqrt.png`,
				fn: sqrt,
				xRange: [0, 10],
				yRange: [0, 4],
				xGrid: [1, 4, 9],
				yGrid: [1, 2, 3]
			});
		});

	});

}
export default test;

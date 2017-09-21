import {
	window,
} from 'j0';
function test(exp, name = 'Math.exp') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/exp/exp.png`,
				fn: exp,
				xRange: [-10, 3],
				yRange: [0, 9],
				xGrid: [0, 1],
				yGrid: [1, Math.E]
			});
		});

	});

}
export default test;

import {
	window,
} from 'j0';
function test(tanh, name = 'Math.tanh') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/tanh/tanh.png`,
				fn: tanh,
				xRange: [-6, 6],
				yRange: [-1, 1],
				xGrid: [-4, -2, 0, 2, 4],
				yGrid: [-0.5, 0, 0.5]
			});
		});

	});

}
export default test;

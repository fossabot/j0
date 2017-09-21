import {
	window,
} from 'j0';
function test(atanh, name = 'Math.atanh') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/atanh/atanh.png`,
				fn: atanh,
				xRange: [-1, 1],
				yRange: [-5, 5],
				xGrid: [-0.5, 0, 0.5],
				yGrid: [-4, -3, -2, -1, 0, 1, 2, 3, 4]
			});
		});

	});

}
export default test;

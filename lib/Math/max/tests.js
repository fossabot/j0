import {
	window,
} from 'j0';
function test(max, name = 'Math.max') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/max/max.png`,
				fn: function (x) {
					return max(0, x);
				},
				xRange: [-1, 1],
				yRange: [-1, 1],
				xGrid: [-0.5, 0, 0.5],
				yGrid: [-0.5, 0, 0.5]
			});
		});

	});

}
export default test;

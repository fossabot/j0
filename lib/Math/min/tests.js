import {
	window,
} from 'j0';
function test(min, name = 'Math.min') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/min/min.png`,
				fn: function (x) {
					return min(0, x);
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

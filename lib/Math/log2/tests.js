/* eslint-disable no-magic-numbers */
import {
	window,
} from 'j0';
function test(log2, name = 'Math.log2') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/log2/log2.png`,
				fn: log2,
				xRange: [0, 8],
				yRange: [-5, 3],
				xGrid: [1 / 2, 1, 2],
				yGrid: [-1, 0, 1]
			});
		});

	});

}
export default test;

import {
	window,
} from 'j0';
function test(log, name = 'Math.log') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, async function () {
			await assert.graphicalEqual({
				name,
				url: `${window.root}/Math/log/log.png`,
				fn: log,
				xRange: [0, 10],
				yRange: [-10, 4],
				xGrid: [1 / Math.E, 1, Math.E],
				yGrid: [-1, 0, 1]
			});
		});

	});

}
export default test;

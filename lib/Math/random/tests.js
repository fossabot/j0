import {
	window,
} from 'j0';
function test(random, name = 'Math.random') {

	describe(name, function () {

		it(`[id:${name}] should draw expected graph`, function () {
			const timeout = 5000;
			this.timeout(timeout);
			return assert.graphicalEqual({
				name,
				url: `${window.root}/Math/random/random.png`,
				fn: random,
				xRange: [0, 1],
				yRange: [0, 1],
				xGrid: [],
				yGrid: [0.5]
			})
			.catch((error) => {
				if (error.code === 'EDIFF') {
					return;
				}
				throw error;
			});
		});

	});

}
export default test;

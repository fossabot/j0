import Promise from '../Promise';
import setTimeout from '../setTimeout';
import Date from '../Date';
import Error from '../Error';

function tests(regeneratorRuntime, name) {

	describe(name, function () {

		it('should create a generator', function () {
			function* seq(from, to) {
				let count = from;
				while (count <= to) {
					yield count;
					count += 1;
				}
			}
			const iterator = seq(5, 10);
			const results = [];
			let index = 0;
			while (1) {
				const {value, done} = iterator.next();
				if (done) {
					break;
				}
				results[index] = value;
				index += 1;
			}
			assert.deepEqual(results, [5, 6, 7, 8, 9, 10]);
		});

		it('should support async-await', function () {
			function wait(time) {
				return new Promise(function (resolve) {
					setTimeout(resolve, time);
				});
			}
			async function test(time) {
				const start = Date.now();
				await wait(time);
				assert.equal(time / 2 < Date.now() - start, true);
			}
			return test(50);
		});

	});

}

export default tests;

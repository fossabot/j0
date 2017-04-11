import Symbol from '../Symbol';
import arrayFrom from '../Array/from';

function tests(Map, name) {

	describe(name, function () {

		it('should create an instance', function () {
			assert.doesNotThrow(function () {
				const map = new Map();
				return map;
			});
		});

		it('should return keys', function () {
			const map = new Map();
			assert.deepEqual(arrayFrom(map.keys()), []);
		});

		it('should return values', function () {
			const map = new Map();
			assert.deepEqual(arrayFrom(map.values()), []);
		});

		it('should initialize with given array', function () {
			const map = new Map([
				[0, 1]
			]);
			assert.deepEqual(
				{
					keys: arrayFrom(map.keys()),
					values: arrayFrom(map.values())
				},
				{
					keys: [0],
					values: [1]
				}
			);
		});

		it('should initialize with given iterable', function () {
			const iterable = {
				[Symbol.iterator]: function* () {
					let count = 0;
					while (count < 1) {
						yield [count, count + 1];
						count += 1;
					}
				}
			};
			const map = new Map(iterable);
			assert.deepEqual({
				keys: arrayFrom(map.keys()),
				values: arrayFrom(map.values())
			}, {
				keys: [0],
				values: [1]
			});
		});

	});

}

export default tests;

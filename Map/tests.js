import Symbol from '../Symbol';

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
			assert.deepEqual(Array.from(map.keys()), []);
		});

		it('should return values', function () {
			const map = new Map();
			assert.deepEqual(Array.from(map.values()), []);
		});

		it('should initialize with given array', function () {
			const map = new Map([
				[0, 1]
			]);
			assert.deepEqual(
				{
					keys: Array.from(map.keys()),
					values: Array.from(map.values())
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
				keys: Array.from(map.keys()),
				values: Array.from(map.values())
			}, {
				keys: [0],
				values: [1]
			});
		});

	});

}

export default tests;

import {
	Symbol,
} from 'j0';

function test(arrayFrom, name = 'Array.from') {

	describe(name, function () {

		it('should create a new array from an array-like object', function () {
			const v1 = new Date();
			const v2 = Date.now();
			const v3 = new Date().toISOString();
			const actual = arrayFrom({
				0: v1,
				1: v2,
				2: v3,
				length: 3
			});
			const expected = [v1, v2, v3];
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});

		it('should create a new array from an iterable object', function () {
			const expected = [
				new Date(),
				Date.now(),
				new Date().toISOString()
			];
			const iterable = {
				[Symbol.iterator]: function () {
					let count = 0;
					return {
						next: function () {
							const value = expected[count++];
							return {
								value,
								done: !value
							};
						}
					};
				}
			};
			const actual = arrayFrom(iterable);
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});

		it('should support map function and thisArg when pass an array-like object', function () {
			const v1 = new Date();
			const v2 = Date.now();
			const v3 = new Date().toISOString();
			function mapFn(value, index) {
				return [value, index, this];
			}
			const thisArg = {};
			const actual = arrayFrom({
				0: v1,
				1: v2,
				2: v3,
				length: 3
			}, mapFn, thisArg);
			const expected = [v1, v2, v3].map(mapFn, thisArg);
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});

		it('should support map function and thisArg when pass an iterable object', function () {
			const array = [
				new Date(),
				Date.now(),
				new Date().toISOString()
			];
			const iterable = {
				[Symbol.iterator]: function () {
					let count = 0;
					return {
						next: function () {
							const value = array[count++];
							return {
								value,
								done: !value
							};
						}
					};
				}
			};
			const thisArg = {};
			function mapFn(value, index) {
				return [value, index, this];
			}
			const actual = arrayFrom(iterable, mapFn, thisArg);
			const expected = array.map(mapFn, thisArg);
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});

	});

}

export default test;

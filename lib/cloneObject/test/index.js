import clone from '../index.js';

function noop() {
	return 0;
}

describe('Object/clone', function () {

	it('should clone an object', function () {
		const data = {a: 1};
		const actual = clone(data);
		const expected = {a: 1};
		assert.deepEqual(actual, expected);
	});

	it('should remove functions', function () {
		const data = {
			a: noop,
			b: 0,
			c: noop
		};
		const actual = clone(data);
		const expected = {b: 0};
		assert.deepEqual(actual, expected);
	});

	it('should isolate original', function () {
		const data = {
			a: noop,
			b: {},
			c: noop
		};
		const actual = clone(data);
		actual.b.a = 0;
		const expected = {b: {a: 0}};
		assert.deepEqual(actual, expected);
		assert.deepEqual(data.b, {});
	});

});

import assign from '..';
describe('Object/assign', function () {
	it('should assign values', function () {
		const target = {
			a: 0,
			b: 0,
			c: 0
		};
		const src1 = {b: 1};
		const src2 = {
			b: 2,
			c: 3
		};
		const returnValue = assign(target, src1, src2);
		const expected = {
			a: 0,
			b: 2,
			c: 3
		};
		assert.equal(target, returnValue);
		assert.deepEqual(returnValue, expected);
	});
});

import last from '..';
describe('Array/last', function () {

	it('should return the last item of an array', function () {
		const array = [1, 2, 3];
		assert.equal(last(array), 3);
	});

	it('should return the last item of an array-like object', function () {
		const arrayLike = {
			2: 3,
			length: 3
		};
		assert.equal(last(arrayLike), 3);
	});

});

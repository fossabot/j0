import parse from '..';

describe('parse', function () {

	it('should parse JSON string', function () {
		assert.deepEqual(parse('[0, [1], {"a": "b"}]'), [0, [1], {a: 'b'}]);
	});

});
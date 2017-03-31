import parse from '..';
import arrayFrom from '../../../Array/from';

describe('FormData/parse', function () {

	it('should parse string', function () {
		const form = parse('a=b&c=d');
		assert.deepEqual(arrayFrom(form.entries()), [
			['a', 'b'],
			['c', 'd']
		]);
	});

});

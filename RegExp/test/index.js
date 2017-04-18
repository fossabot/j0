import RegExp from '..';
describe('RegExp', function () {

	it('should create a regular expression', function () {
		const exp = new RegExp('Hello', 'gi');
		assert.deepEqual(('HeLLohellO').match(exp), ['HeLLo', 'hellO']);
	});

});

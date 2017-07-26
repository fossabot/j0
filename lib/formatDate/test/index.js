import format from '../index.js';

describe('format', function () {

	it('should format a date', function () {
		const src = '2016-01-01T12:00Z';
		const template = '%YYYY%MMM';
		const expected = '2016Jan';
		assert.equal(format(src, template), expected);
	});

});

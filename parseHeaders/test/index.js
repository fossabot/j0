import parseHeaders from '..';
describe('parseHeaders', function () {

	it('should parse raw String', function () {
		const src = '   Content-Length\t: 1000\nContent-Type  : text/html';
		const headers = parseHeaders(src);
		assert.deepEqual(Array.from(headers.entries()), [
			['content-length', '1000'],
			['content-type', 'text/html']
		]);
	});

});

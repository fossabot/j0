import parse from '..';
describe('Headers/parse', function () {

	it('should parse raw String', function () {
		const src = '   Content-Length\t: 1000\nContent-Type  : text/html';
		const headers = parse(src);
		assert.deepEqual(Array.from(headers.entries()), [
			['content-length', '1000'],
			['content-type', 'text/html']
		]);
	});

});

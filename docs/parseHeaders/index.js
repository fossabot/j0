(function(){
'use strict';

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var x = Headers;

function trim(string) {
	return string.trim();
}

function parse(rawHeaders) {
	var headers = new x();
	// Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	// https://tools.ietf.org/html/rfc7230#section-3.2
	var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/, ' ');
	preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
		var _line$split = line.split(':'),
		    _line$split2 = _toArray(_line$split),
		    key = _line$split2[0],
		    parts = _line$split2.slice(1);

		if (key) {
			headers.append(trim(key), trim(parts.join(':')));
		}
	});
	return headers;
}

describe('Headers/parse', function () {

	it('should parse raw String', function () {
		var src = '   Content-Length\t: 1000\nContent-Type  : text/html';
		var headers = parse(src);
		assert.deepEqual(Array.from(headers.entries()), [['content-length', '1000'], ['content-type', 'text/html']]);
	});
});
}())

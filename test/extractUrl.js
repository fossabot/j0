var assert = require('assert');
var extractUrl = require('../lib/extractUrl');

describe('extractUrl', function () {

	it('should extract URLs', function () {
		assert.deepEqual(extractUrl([
			'https://abc.def.com',
			'https://abc.def.com/efg/path',
			'https://abc.def.com/efg/path?a=1',
			'https://abc.def.com/efg/path?a=1#hash'
		].join(' and ')), [
			'https://abc.def.com',
			'https://abc.def.com/efg/path',
			'https://abc.def.com/efg/path?a=1',
			'https://abc.def.com/efg/path?a=1#hash'
		]);
	});

});

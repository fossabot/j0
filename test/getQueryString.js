var assert = require('assert');
var getQueryString = require('../lib/getQueryString');

describe('getQueryString', function () {

	it('should return a query string', function () {
		assert.equal(getQueryString([
			['name', 'Gapplin'],
			['名前', 'ガップリン']
		]), 'name=Gapplin&%E5%90%8D%E5%89%8D=%E3%82%AC%E3%83%83%E3%83%97%E3%83%AA%E3%83%B3');
	});

});

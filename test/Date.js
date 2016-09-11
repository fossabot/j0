describe('Date', function () {

	var assert = require('assert');
	var Date = require('../lib/Date');

	it('should parse an UTC ISO string', function () {
		assert.equal(Date.parse('2016-07-07T01:00Z'), 1467853200000);
	});

	it('should parse an ISO string with offset', function () {
		assert.equal(Date.parse('2016-07-07T10:00+09:00'), 1467853200000);
	});

	it('should get a timestamp as a number', function () {
		assert.equal(new Date('2016-07-07T10:00+09:00').getTime(), 1467853200000);
	});

	it('should get Y, M, D, day, h, m, s', function () {
		var date = new Date('2016-07-07T10:00+09:00');
		assert.deepEqual([
			date.getFullYear(),
			date.getMonth(),
			date.getDay(),
			date.getDate(),
			date.getUTCHours(),
			date.getMinutes(),
			date.getSeconds(),
			date.getMilliseconds()
		], [
			2016,
			6,
			4,
			7,
			1,
			0,
			0,
			0
		]);
	});

	it('should get the last day number of the previous month', function () {
		var date = new Date('2017-01-01T00:00:00Z');
		assert.deepEqual([
			date.setDate(0) && date.getUTCDate(),
			date.setDate(0) && date.getUTCDate(),
			date.setDate(0) && date.getUTCDate(),
			date.setDate(0) && date.getUTCDate(),
			date.setDate(0) && date.getUTCDate(),
			date.setDate(0) && date.getUTCDate(),
			date.setDate(0) && date.getUTCDate(),
			date.setDate(0) && date.getUTCDate(),
			date.setDate(0) && date.getUTCDate(),
			date.setDate(0) && date.getUTCDate(),
			date.setDate(0) && date.getUTCDate(),
			date.setDate(0) && date.getUTCDate()
		], [
			31,
			30,
			31,
			30,
			31,
			31,
			30,
			31,
			30,
			31,
			29,
			31
		]);
	});

});

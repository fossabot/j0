describe('setTimeout', function () {

	var assert = require('assert');
	var setTimeout = require('../lib/setTimeout');
	var Date = require('../lib/Date');

	it('should returns timerId and wait', function (done) {
		var start = Date.now();
		var timerId = setTimeout(function () {
			var end = Date.now();
			assert.equal(timerId && 50 < end - start, true);
			done();
		}, 100);
	});

});

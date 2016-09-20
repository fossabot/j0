describe('setInterval', function () {

	var assert = require('assert');
	var setInterval = require('../lib/setInterval');
	var clearInterval = require('../lib/clearInterval');
	var Date = require('../lib/Date');

	var timerId;

	after(function () {
		clearInterval(timerId);
	});

	it('should returns timerId and iterate', function (done) {
		var start = new Date();
		var count = 0;
		timerId = setInterval(function () {
			var end = new Date();
			count++;
			if (200 < end - start) {
				assert.equal(timerId && 4 < count, true);
				done();
			}
		}, 20);
	});

});

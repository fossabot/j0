describe('clearTimeout', function () {

	var assert = require('assert');
	var clearTimeout = require('../lib/clearTimeout');
	var Error = require('../lib/Error');

	it('should clear the timer', function (done) {
		var timerId = setTimeout(function () {
			done(new Error('Called unfortunately'));
		}, 50);
		setTimeout(done, 100);
		clearTimeout(timerId);
	});

});

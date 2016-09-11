describe('clearInterval', function () {

	var setTimeout = require('../lib/setTimeout');
	var clearInterval = require('../lib/clearInterval');
	var setInterval = require('../lib/setInterval');

	it('should clear the timer', function (done) {
		var timerId = setInterval(function () {
			done(new Error('Called unfortunately'));
		}, 30);
		setTimeout(done, 60);
		clearInterval(timerId);
	});
});

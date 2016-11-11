var requestAnimationFrame = require('../lib/requestAnimationFrame');
var cancelAnimationFrame = require('../lib/cancelAnimationFrame');
var setTimeout = require('../lib/setTimeout');
var Error = require('../lib/Error');
var noop = require('../lib/noop');

describe('cancelAnimationFrame', function () {

	it('should not cancel calling', function (done) {
		var onEnd = function (error) {
			done(error);
			onEnd = noop;
		};
		requestAnimationFrame(function () {
			onEnd();
		});
		setTimeout(function () {
			onEnd(new Error('Called unexpectedly'));
		}, 50);
	});

	it('should cancel calling', function (done) {
		var onEnd = function (error) {
			done(error);
			onEnd = noop;
		};
		var requestId = requestAnimationFrame(function () {
			onEnd(new Error('Called unexpectedly'));
		});
		cancelAnimationFrame(requestId);
		setTimeout(onEnd, 50);
	});

});

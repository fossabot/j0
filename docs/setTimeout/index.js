(function(){
'use strict';

var WAIT = 50;
var MARGIN = 0.9;

describe('setTimeout', function () {

	it('should call fn after ' + WAIT + 'ms', function () {
		var start = Date.now();
		return new Promise(function (resolve) {
			setTimeout(resolve, WAIT);
		}).then(function () {
			var elapsed = Date.now() - start;
			assert.equal(WAIT * MARGIN < elapsed, true);
		});
	});
});
}())

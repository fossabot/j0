(function(){
'use strict';

var WAIT = 100;

describe('clearTimeout', function () {

	it('should cancel calling', function () {
		var count = 0;
		return new Promise(function (resolve) {
			var timer = setTimeout(function () {
				count += 1;
			});
			clearTimeout(timer);
			setTimeout(resolve, WAIT);
		}).then(function () {
			assert.equal(count, 0);
		});
	});
});
}())

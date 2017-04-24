(function(){
'use strict';

function wait(duration, data) {
	return new Promise(function (resolve) {
		setTimeout(resolve, duration);
	}).then(function () {
		return data;
	});
}

describe('wait', function () {
	it('should return a promise', function () {
		var start = Date.now();
		return wait(100).then(function () {
			assert.equal(80 < Date.now() - start, true);
		});
	});
});
}())

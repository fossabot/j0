(function(){
'use strict';

function onError(error) {
	onError.listener(error);
}

onError.listener = function (error) {
	console.error(error);
};

describe('onError', function () {

	it('should call its listener', function () {
		var count = 0;
		function listener(x) {
			count += x;
		}
		onError.listener = listener;
		onError(1);
		onError(2);
		assert.equal(count, 3);
	});
});
}())

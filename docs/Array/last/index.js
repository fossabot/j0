(function(){
'use strict';

function last(arrayLike) {
	return arrayLike[arrayLike.length - 1];
}

describe('Array/last', function () {

	it('should return the last item of an array', function () {
		var array = [1, 2, 3];
		assert.equal(last(array), 3);
	});

	it('should return the last item of an array-like object', function () {
		var arrayLike = {
			2: 3,
			length: 3
		};
		assert.equal(last(arrayLike), 3);
	});
});
}())

(function(){
'use strict';

function pop(array) {
	return array.pop();
}

describe('Array/pop', function () {

	it('should return the last item of array', function () {
		var array = [1, 2, 3, 4, 5];
		var actual = pop(array);
		var expected1 = 5;
		var expected2 = [1, 2, 3, 4];
		assert.equal(actual, expected1);
		assert.deepEqual(array, expected2);
	});
});
}())

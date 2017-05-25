(function(){
'use strict';

function includes(searchElement) {
	var fromIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	for (var length = this.length, i = fromIndex < 0 ? length + fromIndex : fromIndex; i < length; i++) {
		if (this[i] === searchElement) {
			return true;
		}
	}
	return false;
}

function test(includes) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.includes';


	describe(name, function () {

		it('should return whether the array has the value', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			assert.equal(includes.call(array, array[0]), true);
			assert.equal(includes.call(array, array[array.length]), false);
		});

		it('should support positive fromIndex', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			assert.equal(includes.call(array, array[1], 1), true);
			assert.equal(includes.call(array, array[1], 2), false);
		});

		it('should support negative fromIndex', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			assert.equal(includes.call(array, array[1], -1), false);
			assert.equal(includes.call(array, array[1], -2), true);
		});
	});
}

test(includes, 'Array.prototype.includes#j0');
}())

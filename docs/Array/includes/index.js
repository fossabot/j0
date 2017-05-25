(function(){
'use strict';

function includes(searchElement) {
	var fromIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	for (var i = fromIndex, length = this.length; i < length; i++) {
		if (this[i] === searchElement) {
			return true;
		}
	}
	return false;
}

function test(includes) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.includes';


	describe(name, function () {

		it('should find an item', function () {
			var array = [0, 1, 2, 3];
			assert.equal(includes.call(array, 1), true);
			assert.equal(includes.call(array, 4), false);
		});

		it('should find an item from array-like', function () {
			var arrayLike = {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				length: 4
			};
			assert.equal(includes.call(arrayLike, 1), true);
			assert.equal(includes.call(arrayLike, 4), false);
		});

		it('should find a character from a string', function () {
			var string = 'abcde';
			assert.equal(includes.call(string, 'c'), true);
			assert.equal(includes.call(string, 'f'), false);
		});
	});
}

test(includes, 'Array.prototype.includes#j0');

test(Array.prototype.includes);
}())

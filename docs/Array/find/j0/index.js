(function(){
'use strict';

function findIndex(fn, thisArg) {
	for (var i = 0, length = this.length; i < length; i++) {
		var value = this[i];
		if (fn.call(thisArg, this[i], i, this)) {
			return value;
		}
	}
}

function test(findIndex) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.find';


	describe(name, function () {

		it('should return 1', function () {
			assert.equal(findIndex.call([1, 2, 3], function (x) {
				return x === 1;
			}), 1);
		});

		it('should return undefined', function () {
			assert.equal(findIndex.call([1, 2, 3], function (x) {
				return x === 4;
			}));
		});
	});
}

test(findIndex, 'Array.prototype.find.j0');
}())

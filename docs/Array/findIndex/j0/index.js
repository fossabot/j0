(function(){
'use strict';

function findIndex(fn, thisArg) {
	for (var i = 0, length = this.length; i < length; i++) {
		if (fn.call(thisArg, this[i], i, this)) {
			return i;
		}
	}
	return -1;
}

function test(findIndex) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.findIndex';


	describe(name, function () {

		it('should return 0', function () {
			assert.equal(findIndex.call([1, 2, 3], function (x) {
				return x === this.expected;
			}, { expected: 1 }), 0);
		});

		it('should return -1', function () {
			assert.equal(findIndex.call([1, 2, 3], function (x) {
				return x === this.expected;
			}, { expected: 4 }), -1);
		});
	});
}

test(findIndex, 'Array.prototype.findIndex.j0');
}())

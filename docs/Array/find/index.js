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

function test(find) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.find';


	describe(name, function () {

		it('should return 1', function () {
			var expected = Date.now();
			var array = [new Date(), expected, new Date().toISOString()];
			var actual = find.call(array, function (x) {
				return x === this.expected;
			}, { expected: expected });
			assert.equal(actual, expected);
		});

		it('should return undefined', function () {
			var _ref = [],
			    expected = _ref[0];

			var array = [new Date(), Date.now(), new Date().toISOString()];
			var actual = find.call(array, function () {
				return false;
			});
			assert.equal(actual, expected);
		});
	});
}

test(findIndex, 'Array.prototype.find#j0');

test(Array.prototype.find);
}())

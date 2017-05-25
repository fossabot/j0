(function(){
'use strict';

function arrayOf() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return args;
}

function test(arrayOf) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.of';


	describe(name, function () {

		it('should create an array', function () {
			var expected = [new Date(), Date.now(), new Date().toString()];
			var actual = arrayOf.apply(undefined, expected);
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});
	});
}

test(arrayOf, 'Array.of#j0');
}())

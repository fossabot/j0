(function(){
'use strict';

function test(MAX_SAFE_INTEGER) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Number.MAX_SAFE_INTEGER';


	describe(name, function () {

		it('should evaluate to true', function () {
			assert.equal(MAX_SAFE_INTEGER + 1, MAX_SAFE_INTEGER + 2);
		});
	});
}

var J0MAX_SAFE_INTEGER = 9007199254740991;

test(J0MAX_SAFE_INTEGER, 'J0MAX_SAFE_INTEGER');
}())

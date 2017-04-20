(function(){
'use strict';

var parse = JSON.parse;

describe('JSON/parse', function () {

	it('should parse JSON string', function () {
		assert.deepEqual(parse('[0, [1], {"a": "b"}]'), [0, [1], { a: 'b' }]);
	});
});

var stringify = JSON.stringify;

describe('JSON/stringify', function () {

	it('should convert a string', function () {
		var value = 'abc';
		var expected = '"abc"';
		assert.equal(stringify(value), expected);
	});

	it('should convert a number', function () {
		var value = 123;
		var expected = '123';
		assert.equal(stringify(value), expected);
	});
});
}())

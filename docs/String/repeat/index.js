(function(){
'use strict';

function test(repeat) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype.repeat';


	describe(name, function () {

		it('should repeat the string for specified times', function () {
			var src = '3';
			var count = 10;
			var expected = '3333333333';
			assert.equal(repeat.call(src, count), expected);
		});
	});
}

var x = parseInt;

function repeat(c) {
	var count = x(c, 10);
	var results = [];
	for (var i = 0; i < count; i += 1) {
		results.push(this);
	}
	return results.join('');
}

test(repeat, 'String.prototype.repeat#j0');

test(String.prototype.repeat);
}())

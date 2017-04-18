(function(){
'use strict';

describe('RegExp', function () {

	it('should create a regular expression', function () {
		var exp = new RegExp('Hello', 'gi');
		assert.deepEqual('HeLLohellO'.match(exp), ['HeLLo', 'hellO']);
	});
});
}())

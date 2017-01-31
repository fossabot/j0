var assert = require('assert');
var empty = require('../lib/empty');
var createElement = require('../lib/createElement');
var childNodes = require('../lib/childNodes');

describe('empty', function () {

	it('should remove children', function () {
		var element = createElement({
			c: [
				{},
				'',
				{},
				''
			]
		});
		var beforeCount = childNodes(element).length;
		var afterCount = (empty(element) || 1) && childNodes(element).length;
		assert.equal(beforeCount - afterCount, 4);
	});

});

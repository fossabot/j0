var assert = require('assert');
var childNodes = require('../lib/childNodes');
var createElement = require('../lib/createElement');
var map = require('../lib/map');

describe('childNodes', function () {

	it('should return child nodes', function () {
		var nodes = map([
			'Wyvern',
			{
				c: 'Whackamole'
			},
			'Urnite'
		], createElement);
		assert.deepEqual(childNodes(createElement({
			c: nodes
		})), nodes);
	});

});

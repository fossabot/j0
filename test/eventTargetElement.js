var assert = require('assert');
var eventTargetElement = require('../lib/eventTargetElement');

describe('eventTargetElement', function () {

	it('should get a target of event', function () {
		assert.equal(eventTargetElement({
			target: 1
		}), 1);
	});

});

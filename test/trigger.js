describe('trigger', function () {

	var assert = require('assert');
	var createElement = require('../lib/createElement');
	var trigger = require('../lib/trigger');

	it('should trigger an event with data', function (done) {
		trigger(createElement({
			e: [
				['boss', function (event) {
					assert.deepEqual(event.detail, {
						name: 'Hargon'
					});
					done();
				}]
			]
		}), 'boss', {
			name: 'Hargon'
		});
	});

	it('should do nothing with null', function () {
		assert.doesNotThrow(function () {
			trigger(null, 'nullEvent');
		});
	});

});

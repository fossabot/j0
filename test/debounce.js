var assert = require('assert');
var debounce = require('../lib/debounce');
var setInterval = require('../lib/setInterval');
var clearInterval = require('../lib/clearInterval');

describe('debounce', function () {

	it('should execute the function after the last call', (done) => {
		var interval = 15;
		var execute = debounce((result) => {
			assert.equal(result, 1);
			done();
		}, interval * 2);
		var count = 10;
		const timer = setInterval(() => {
			if (0 < count) {
				execute(count);
				count -= 1;
			} else {
				clearInterval(timer);
			}
		}, interval);
	});

});

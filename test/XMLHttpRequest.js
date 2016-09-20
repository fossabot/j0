describe('XMLHttpRequest', function () {

	var assert = require('assert');
	var XMLHttpRequest = require('../lib/XMLHttpRequest');

	it('should get /index.html', function (done) {
		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', done);
		xhr.addEventListener('abort', done);
		xhr.addEventListener('load', function () {
			var xhr = this;
			assert.equal(/<title>/.test(xhr.response), true);
			done();
		});
		xhr.open('GET', '/');
		xhr.send();
		assert.equal(!!XMLHttpRequest, true);
	});

});

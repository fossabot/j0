(function(){
'use strict';

var Promise = window.Promise;

var document = window.document;

var setTimeout = window.setTimeout;

var INTERVAL = 100;

var getBody = new Promise(function (resolve) {
	function get() {
		var body = document.body;

		if (body) {
			resolve(body);
		} else {
			setTimeout(get, INTERVAL);
		}
	}
	get();
});

describe('getBody', function () {

	it('should return a promise', function () {
		return getBody.then(function (body) {
			assert.equal(!body.appendChild, false);
		});
	});
});
}())

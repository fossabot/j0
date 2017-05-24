(function(){
'use strict';

var INTERVAL = 100;

var getBody = new Promise(function (resolve) {
	function get() {
		var _document = document,
		    body = _document.body;

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

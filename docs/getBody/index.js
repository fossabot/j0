(function(){
'use strict';

/* global window */

var _window = window,
    document = _window.document;
var _window2 = window,
    setTimeout = _window2.setTimeout;
var _window3 = window,
    Promise$1 = _window3.Promise;


var INTERVAL = 100;

var getBody = new Promise$1(function (resolve) {
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

(function(){
'use strict';

describe('XMLHttpRequest', function () {

	it('should get this page', function () {
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', '.');
			xhr.onerror = function () {
				reject(xhr.error);
			};
			xhr.onload = function () {
				resolve(xhr.response);
			};
			xhr.send();
		}).then(function (result) {
			assert.equal(/<!doctype/.test(result), true);
		});
	});
});
}())

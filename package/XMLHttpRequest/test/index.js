import XMLHttpRequest from '..';
import Promise from '../../Promise';

describe('XMLHttpRequest', function () {

	it('should get this page', function () {
		return new Promise(function (resolve, reject) {
			const xhr = new XMLHttpRequest();
			xhr.open('GET', '.');
			xhr.onerror = function () {
				reject(xhr.error);
			};
			xhr.onload = function () {
				resolve(xhr.response);
			};
			xhr.send();
		})
		.then(function (result) {
			assert.equal(/<!doctype/.test(result), true);
		});
	});

});

(function(){
'use strict';

function promisify(reader) {
	return new Promise(function (resolve, reject) {
		reader.onload = function () {
			resolve(reader.result);
		};
		reader.onerror = function () {
			reject(reader.error);
		};
	});
}

describe('FileReader/promisify', function () {

	it('should be a function', function () {
		return promisify;
	});
});
}())

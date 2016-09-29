var Promise = require('./Promise');
var FileReader = require('./FileReader');
module.exports = function (file) {
	return new Promise(function (resolve) {
		var reader = new FileReader();
		reader.onload = function () {
			resolve(reader.result);
		};
		reader.readAsArrayBuffer(file);
	});
};

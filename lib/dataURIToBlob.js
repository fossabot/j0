module.exports = function (uri) {

	var createBlob = require('./createBlob');
	var atob = require('./atob');
	var ArrayBuffer = require('./ArrayBuffer');
	var Uint8Array = require('./Uint8Array');
	var pop = require('./pop');
	var shift = require('./shift');
	var decodeURIComponent = require('./decodeURIComponent');

	var stringFallback = function (x, y) {
		return x || y || '';
	};

	var S_COMMA = ',';
	var S_COLON = ':';
	var S_SEMICOLON = ';';
	var S_TEXT_PLAIN = 'text/plain';
	var S_BASE64 = 'base64';

	uri = stringFallback(uri).split(S_COMMA);

	var bytes = decodeURIComponent(stringFallback(pop(uri)));
	var header = stringFallback(stringFallback(pop(pop(uri).split(S_COLON))), S_TEXT_PLAIN).split(S_SEMICOLON);
	var mime = shift(header);
	var byteLength;
	var buffer;
	var i;
	if (shift(header) === S_BASE64) {
		bytes = atob(bytes);
		byteLength = bytes.length;
		buffer = new ArrayBuffer(byteLength);
		buffer = new Uint8Array(buffer);
		for (i = 0; i < byteLength; i += 1) {
			buffer[i] = bytes.charCodeAt(i);
		}
		buffer = buffer.buffer;
	} else {
		buffer = bytes;
	}
	return createBlob([buffer], mime);
};

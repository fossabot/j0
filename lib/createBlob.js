var forEach = require('./forEach');
var Blob = require('./Blob');
var BlobBuilder = require('./BlobBuilder');
module.exports = function (buffers, mime) {
	var buffer;
	var builder;
	try {
		buffer = new Blob(buffers, {
			type: mime
		});
	} catch (error) {
		builder = new BlobBuilder();
		forEach(buffers, function (data) {
			builder.append(data);
		});
		buffer = builder.getBlob(mime);
	}
	return buffer;
};

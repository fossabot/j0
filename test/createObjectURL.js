var assert = require('assert');
var createObjectURL = require('../lib/createObjectURL');
var revokeObjectURL = require('../lib/revokeObjectURL');
var createBlob = require('../lib/createBlob');
var http = require('../lib/http');

describe('createObjectURL', function () {

	var url;

	afterEach(function () {
		revokeObjectURL(url);
	});

	it('should create an object url', function (done) {
		var blob = createBlob(['Putregon']);
		url = createObjectURL(blob);
		http({
			method: 'GET',
			url: url,
			withoutD: true
		}).then(function (result) {
			assert.equal(result, 'Putregon');
			done();
		}).catch(done);
	});

});

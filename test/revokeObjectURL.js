var assert = require('assert');
var createObjectURL = require('../lib/createObjectURL');
var revokeObjectURL = require('../lib/revokeObjectURL');
var createBlob = require('../lib/createBlob');
var Error = require('../lib/Error');
var http = require('../lib/http');

describe('revokeObjectURL', function () {

	var url;

	afterEach(function () {
		revokeObjectURL(url);
	});

	it('should revoke an object url', function (done) {
		var blob = createBlob(['Rampone']);
		url = createObjectURL(blob);
		http({
			method: 'GET',
			url: url,
			withoutD: true
		})
			.then(function (result) {
				revokeObjectURL(url);
				assert.equal(result, 'Rampone');
				return http({
					method: 'GET',
					url: url,
					withoutD: true
				});
			})
			.then(function () {
				throw new Error('Unfortunatery, the revoked url works fine.');
			})
			.catch(function () {})
			.then(done)
			.catch(done);
	});
});

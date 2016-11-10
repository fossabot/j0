var assert = require('assert');
var addCss = require('../lib/addCss');
var getElementById = require('../lib/getElementById');

describe('addCss', function () {

	it('should add a style sheet', function (done) {
		addCss('files/test.css', 'testCss').then(function (cssElement) {
			assert.equal(getElementById('testCss'), cssElement);
			done();
		}).catch(done);
	});

});

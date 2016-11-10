var assert = require('assert');
var window = require('../lib/window');
var addScript = require('../lib/addScript');

describe('addScript', function () {

	it('should add a script', function (done) {
		addScript('files/test.js', 'testJs').then(function () {
			assert.equal(window.testJs, 'Laughing Grass');
			done();
		}).catch(done);
	});

});

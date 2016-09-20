describe('addEventListener', function () {

	var assert = require('assert');
	var createElement = require('../lib/createElement');
	var trigger = require('../lib/trigger');
	var addEventListener = require('../lib/addEventListener');

	it('should add a new listener', function (done) {
		var element = createElement({});
		addEventListener(element, 'Archmage', function () {
			done();
		});
		trigger(element, 'Archmage');
	});

	it('should return an array', function () {
		var element = createElement({});
		var fn = function () {};
		assert.deepEqual(addEventListener(element, 'Archmage', fn), [[element, 'Archmage', fn]]);
	});

});

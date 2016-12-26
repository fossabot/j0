var assert = require('assert');
var createElement = require('../lib/createElement');
var trigger = require('../lib/trigger');
var addEventListener = require('../lib/addEventListener');

describe('addEventListener', function () {

	beforeEach(function () {
		delete addEventListener.middleware;
	});

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

	it('should supports middleware', function () {
		var element = createElement({});
		var fn = function () {};
		var called;
		addEventListener.middleware = function (object, eventName, fn) {
			called = [object, eventName, fn];
		};
		addEventListener(element, 'Archmage', fn);
		assert.deepEqual(called, [element, 'Archmage', fn]);
	});

});

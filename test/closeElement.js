var assert = require('assert');
var createElement = require('../lib/createElement');
var appendChild = require('../lib/appendChild');
var closeElement = require('../lib/closeElement');
var parentNode = require('../lib/parentNode');
var hasClass = require('../lib/hasClass');
var Date = require('../lib/Date');
var Error = require('../lib/Error');

describe('closeElement', function () {

	var parentElement = createElement({});

	it('should add a close class', function () {
		var element = appendChild(parentElement, createElement({}));
		closeElement(element);
		assert.equal(hasClass(element, 'close'), true);
	});

	it('should return a promise and resolve it after it is removed from its parent element', function (done) {
		var element = appendChild(parentElement, createElement({}));
		var start = Date.now();
		if (parentNode(element) === parentElement) {
			closeElement(element).then(function () {
				var d = Date.now() - start - 300;
				assert.equal(parentNode(element) === parentElement, false);
				assert.equal(d * d < 400, true);
				done();
			}).catch(done);
		} else {
			done(new Error('Failed to append an element to the parent element'));
		}
	});

	it('should resolve the returned resolve after waiting for 50ms', function (done) {
		var element = appendChild(parentElement, createElement({}));
		var start = Date.now();
		if (parentNode(element) === parentElement) {
			closeElement(element, 50).then(function () {
				var d = Date.now() - start - 50;
				assert.equal(parentNode(element) === parentElement, false);
				assert.equal(d * d < 100, true);
				done();
			}).catch(done);
		} else {
			done(new Error('Failed to append an element to the parent element'));
		}
	});

});

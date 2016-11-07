var assert = require('assert');
var DocumentFragment = require('../lib/DocumentFragment');
var createElement = require('../lib/createElement');

describe('DocumentFragment', function () {

	it('should be a function or null', function () {
		assert.equal(DocumentFragment === null || typeof DocumentFragment === 'function', true);
	});

	if (DocumentFragment) {
		it('should create a fragment', function () {
			assert.doesNotThrow(function () {
				var fragment = new DocumentFragment();
				fragment = false;
			});
		});

		it('should append a child', function () {
			var fragment = new DocumentFragment();
			var child = createElement({
				c: ['Hawk Man']
			});
			fragment.appendChild(child);
			assert.equal(fragment.firstElementChild, child);
			assert.equal(fragment.lastElementChild, child);
		});
	}

});

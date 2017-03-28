import removeEventListener from '..';
import hasEventListener from '../../hasEventListener';
import createElement from '../../createElement';

describe('dom/removeEventListener', function () {

	it('should remove a listener', function () {
		function fn() {}
		const eventName = 'abc';
		const element = createElement({
			e: [
				[eventName, fn]
			]
		});
		assert.equal(hasEventListener(element, eventName, fn), true);
		removeEventListener(element, eventName, fn);
		assert.equal(hasEventListener(element, eventName, fn), false);
	});

});

import addEventListener from '..';
import createElement from '../../createElement';
import getEventListeners from '../../getEventListeners';

describe('dom/addEventListener', function () {

	it('should add a listener', function () {
		function fn() {}
		const element = createElement();
		const eventName = 'abc';
		addEventListener(element, eventName, fn);
		assert.equal(getEventListeners(element, eventName).has(fn), true);
	});

});

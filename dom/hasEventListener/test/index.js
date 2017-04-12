import hasEventListener from '..';
import createElement from '../../createElement';

describe('dom/hasEventListener', function () {

	it('should return true if the element has a listener for abc events', function () {
		function fn() {}
		const eventName = 'abc';
		const element = createElement({
			e: [
				[eventName, fn]
			]
		});
		assert.equal(hasEventListener(element, eventName), true);
	});

	it('should return false if the element has no listeners for abc events', function () {
		function fn() {}
		const eventName1 = 'abc';
		const eventName2 = 'def';
		const element = createElement({
			e: [
				[eventName2, fn]
			]
		});
		assert.equal(hasEventListener(element, eventName1), false);
	});

	it('should return true if the element has a specified listener for abc events', function () {
		function fn() {}
		const eventName = 'abc';
		const element = createElement({
			e: [
				[eventName, fn]
			]
		});
		assert.equal(hasEventListener(element, eventName, fn), true);
	});

	it('should return false if the element does not have a specified listener for abc events', function () {
		function fn() {}
		function fn2() {}
		const eventName = 'abc';
		const element = createElement({
			e: [
				[eventName, fn]
			]
		});
		assert.equal(hasEventListener(element, eventName, fn2), false);
	});

});

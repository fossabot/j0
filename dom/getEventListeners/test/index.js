import getEventListeners from '..';
import createElement from '../../createElement';
import map from '../../../Array/map';

describe('dom/getEventListeners', function () {

	it('should get a Map', function () {
		function fn1() {}
		function fn2() {}
		const eventName1 = 'abc';
		const eventName2 = 'def';
		const element = createElement({
			e: [
				[eventName1, fn1],
				[eventName2, fn2]
			]
		});
		const result = getEventListeners(element);
		assert.deepEqual(map(result.keys()), [eventName1, eventName2]);
		assert.deepEqual(map(result.values(), function (set) {
			return map(set);
		}), [[fn1], [fn2]]);
	});

	it('should get a Set', function () {
		function fn1() {}
		function fn2() {}
		const eventName1 = 'abc';
		const eventName2 = 'def';
		const element = createElement({
			e: [
				[eventName1, fn1],
				[eventName2, fn2]
			]
		});
		const result = getEventListeners(element, eventName2);
		assert.deepEqual(map(result), [fn2]);
	});

});

import {
	N,
} from 'j0';
import emitAll from '..';

describe('emitAll', function () {

	it('should emit for each element', function () {
		const results = [];
		function fn(event) {
			results.push([this, event.detail]);
		}
		const className = `class${Date.now()}`;
		const eventName = `event${Date.now()}`;
		const eventData = `eventData${Date.now()}`;
		const element1 = new N({
			a: [['class', className]],
			e: [[eventName, fn]]
		});
		const element2 = new N({
			a: [['class', className]],
			e: [[eventName, fn]]
		});
		const element3 = new N({
			a: [['class', className]],
			e: [[eventName, fn]]
		});
		const element4 = new N({
			a: [['class', className]],
			e: [[eventName, fn]]
		});
		const element5 = new N({
			a: [['class', className]],
			c: [element3, element4],
			e: [[eventName, fn]]
		});
		const element = new N({
			c: [
				element1,
				element2,
				element5
			]
		});
		emitAll(eventName, eventData, `.${className}`, element);
		const expected = [
			element1,
			element2,
			element5,
			element3,
			element4
		];
		assert.equal(results.length, expected.length);
		results
		.forEach(([element, data], index) => {
			assert.equal(data, eventData);
			assert.equal(element.equals(expected[index]), true);
		});
	});

});

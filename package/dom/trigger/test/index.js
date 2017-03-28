import trigger from '..';
import createElement from '../../createElement';

describe('dom/trigger', function () {

	it('should trigger an event', function () {
		let count = 0;
		const element = createElement({
			e: [
				['abc', function () {
					count += 1;
				}]
			]
		});
		trigger(element, 'abc');
		assert.equal(count, 1);
	});

});

import addEventListener from '..';
import createElement from '../../createElement';

describe('dom/addEventListener', function () {

	it('should add a listener', function () {
		function fn(event) {
			console.log(event);
		}
		const element = createElement({});
		const eventName = 'abc';
		addEventListener(element, eventName, fn);
	});

});

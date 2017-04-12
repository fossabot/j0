import setStyle from '..';
import createElement from '../../createElement';
import getAttribute from '../../getAttribute';

describe('dom/setStyle', function () {

	it('should set css property', function () {
		const element = createElement();
		const key = 'color';
		const value = 'rgb(0, 0, 0)';
		setStyle(element, key, value);
		assert.equal(/color\s*:\s*rgb\(\s*0\s*,\s*0\s*,\s*0\s*\)/.test(getAttribute(element, 'style')), true);
	});

});

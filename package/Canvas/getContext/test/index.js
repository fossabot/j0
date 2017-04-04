import getContext from '..';
import createElement from '../../../dom/createElement';

describe('Canvas/getContext', function () {

	it('should return context', function () {
		const canvas = createElement({t: 'canvas'});
		assert.doesNotThrow(function () {
			return getContext(canvas);
		});
	});

});

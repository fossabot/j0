import getBoundingClientRect from '..';
import appendChild from '../../appendChild';
import document from '../../../document';
import createElement from '../../createElement';

describe('dom/getBoundingClientRect', function () {

	it('should return a rect', function () {
		const expected = {
			left: 50,
			top: 60,
			width: 70,
			height: 80
		};
		const element = createElement({
			a: [
				['style', [
					'position: fixed',
					'background-color:rgba(0,0,0,0.5)',
					`left:${expected.left}px`,
					`top:${expected.top}px`,
					`width:${expected.width}px`,
					`height:${expected.height}px`,
					'margin:0'
				].join(';')]
			]
		});
		appendChild(document.body, element);
		const rect = getBoundingClientRect(element);
		console.log(rect, expected);
		assert.deepEqual({
			left: rect.left,
			top: rect.top,
			width: rect.width,
			height: rect.height
		}, expected);
	});

});

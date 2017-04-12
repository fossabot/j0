import getElementById from '../dom/getElementById';
import getTextContent from '../dom/getTextContent';

function tests(fetch, name) {

	describe(name, function () {

		it('should get this page', function () {
			return fetch('./index.html')
			.then((response) => {
				return response.text();
			})
			.then((text) => {
				assert.equal((/<!doctype/).test(text), true);
			});
		});

		it('should get json', function () {
			return fetch(`${getTextContent(getElementById('root'))}/fetch/test.json`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				assert.deepEqual(data, {a: 'b'});
			});
		});

	});

}

export default tests;

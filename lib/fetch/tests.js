import {
	document,
} from 'j0';
function tests(fetch, name = 'fetch') {

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
			return fetch(`${document.getElementById('root').textContent}/fetch/test.json`)
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

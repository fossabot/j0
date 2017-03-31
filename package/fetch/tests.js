import getElementById from '../dom/getElementById';

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
			const root = getElementById('root').textContent;
			return fetch(`${root}/staticFiles/test.json`)
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

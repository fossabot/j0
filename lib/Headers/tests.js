/* eslint-disable no-constant-condition */
function tests(Headers, testName = 'Headers') {

	describe(testName, function () {

		it('should have has()', function () {
			const init = {
				'Content-Type': 'text/html',
				'Content-Length': '100'
			};
			const headers = new Headers(init);
			assert.equal(headers.has('Content-Type'), true);
			assert.equal(headers.has('Location'), false);
		});

		it('should have append()', function () {
			const headers = new Headers();
			const name = 'a';
			const value = 'b';
			headers.append(name, value);
			headers.append(name, value);
			assert.deepEqual(headers.get(name).split(/\s*,\s*/), [value, value]);
		});

		it('should have set()', function () {
			const headers = new Headers();
			const name = 'a';
			const value1 = 'b';
			const value2 = 'c';
			headers.set(name, value1);
			headers.set(name, value2);
			assert.deepEqual(headers.get(name).split(/\s*,\s*/), [value2]);
		});

		it('should have get()', function () {
			const headers = new Headers();
			const name = 'a';
			const value1 = 'b';
			const value2 = 'c';
			headers.append(name, value1);
			headers.append(name, value2);
			assert.deepEqual(headers.get(name).split(/\s*,\s*/), [value1, value2]);
		});

		it('should have delete()', function () {
			const headers = new Headers();
			const name = 'a';
			const value1 = 'b';
			const value2 = 'c';
			headers.append(name, value1);
			headers.append(name, value2);
			assert.equal(headers.has(name), true);
			headers.delete(name);
			assert.equal(headers.has(name), false);
		});

		it('should have entries()', function () {
			const headers = new Headers();
			const name = 'a';
			const value1 = 'b';
			const value2 = 'c';
			headers.append(name, value1);
			headers.append(name, value2);
			const results = {};
			const iterator = headers.entries();
			while (1) {
				const {value: [key, value] = [], done} = iterator.next();
				if (done) {
					break;
				}
				const result = results[key] || [];
				result.push(...value.split(/\s*,\s*/));
				results[key] = result;
			}
			assert.deepEqual(results, {
				[name]: [value1, value2]
			});
		});

		it('should have values()', function () {
			const headers = new Headers();
			const name = 'a';
			const value1 = 'b';
			const value2 = 'c';
			headers.append(name, value1);
			headers.append(name, value2);
			const results = [];
			const iterator = headers.values();
			while (1) {
				const {value, done} = iterator.next();
				if (done) {
					break;
				}
				results.push(...value.split(/\s*,\s*/));
			}
			assert.deepEqual(
				results,
				[value1, value2]
			);
		});

	});

}

export default tests;

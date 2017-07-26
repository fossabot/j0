import StringList from '../index.js';
describe('StringList', function () {

	it('should have has()', function () {
		const searchParams = new StringList([
			['topic', 'a']
		]);
		assert.equal(searchParams.has('topic'), true);
		assert.equal(searchParams.has('topick'), false);
	});

	it('should have append()', function () {
		const searchParams = new StringList();
		const name = 'a';
		const value = 'b';
		searchParams.append(name, value);
		searchParams.append(name, value);
		assert.equal(searchParams.toString(), 'a:b,a:b');
	});

	it('should have set()', function () {
		const searchParams = new StringList();
		const name = 'a';
		const value1 = 'b';
		const value2 = 'c';
		searchParams.set(name, value1);
		searchParams.set(name, value2);
		assert.equal(searchParams.toString(), 'a:c');
	});

	it('should have get()', function () {
		const searchParams = new StringList();
		const name = 'a';
		const value1 = 'b';
		const value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		assert.equal(searchParams.get(name), value1);
	});

	it('should have getAll()', function () {
		const searchParams = new StringList();
		const name = 'a';
		const value1 = 'b';
		const value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		assert.deepEqual(searchParams.getAll(name), [value1, value2]);
	});

	it('should have delete()', function () {
		const searchParams = new StringList();
		const name = 'a';
		const value1 = 'b';
		const value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		searchParams.delete(name);
		assert.equal(searchParams.toString(), '');
	});

	it('should have entries()', function () {
		const searchParams = new StringList();
		const name = 'a';
		const value1 = 'b';
		const value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		let index = 0;
		const results = [];
		const iterator = searchParams.entries();
		while (1) {
			const {value, done} = iterator.next();
			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, [
			[name, value1],
			[name, value2]
		]);
	});

	it('should have values()', function () {
		const searchParams = new StringList();
		const name = 'a';
		const value1 = 'b';
		const value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		let index = 0;
		const results = [];
		const iterator = searchParams.values();
		while (1) {
			const {value, done} = iterator.next();
			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, [
			value1,
			value2
		]);
	});

});

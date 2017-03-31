function tests(Set, name) {

	describe(name, function () {

		it('should support constructor arguments', function () {
			const data = [1, 2, 3];
			const set = new Set(data);
			assert.equal(set.size, 3);
		});

		it('should have add()', function () {
			const set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			const returnValue = set.add(4);
			assert.equal(set.size, 4);
		});

		it('should return itself', function () {
			const set = new Set();
			assert.equal(set.add(1), set);
		});

		it('should keep uniqueness', function () {
			const set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			set.add(3);
			assert.equal(set.size, 3);
		});

		it('should return true on deleting existing item', function () {
			const set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			const returnValue = set.delete(3);
			assert.equal(set.size, 2);
			assert.equal(returnValue, true);
		});

		it('should return false on deleting existing item', function () {
			const set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			const returnValue = set.delete(4);
			assert.equal(set.size, 3);
			assert.equal(returnValue, false);
		});

		it('should have forEach()', function () {
			const set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			let index = 0;
			const results = [];
			const context = {};
			set.forEach(function (...args) {
				args[3] = this;
				results[index++] = args;
			}, context);
			assert.deepEqual(results, [
				[1, 1, set, context],
				[2, 2, set, context],
				[3, 3, set, context]
			]);
		});

		it('should have has()', function () {
			const set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			assert.deepEqual(
				[
					set.has(3),
					set.has(4)
				],
				[
					true,
					false
				]
			);
		});

		it('should have values()', function () {
			const set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			const iterator = set.values();
			let index = 0;
			const results = [];
			while (1) {
				const {value, done} = iterator.next();
				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(
				results,
				[1, 2, 3]
			);
		});

		it('should have entries()', function () {
			const set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			const iterator = set.entries();
			let index = 0;
			const results = [];
			while (1) {
				const {value, done} = iterator.next();
				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(
				results,
				[[1, 1], [2, 2], [3, 3]]
			);
		});

	});

}

export default tests;

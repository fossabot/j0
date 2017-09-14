import Vector from '..';
const delta = 0.000000001;

describe('Vector', function () {

	it('should have a copy of an array', function () {
		const components = [1, 2, 3];
		const v = new Vector(components);
		assert.deepEqual(v.array, components);
		assert(v.array !== components);
	});

	describe('Vector.prototype.get', function () {
		const components = [1, 2, 3];
		[
			[0, 1],
			[1, 2],
			[2, 3],
		]
		.forEach(([index, expected]) => {
			it(`should return ${expected}`, function () {
				const v = new Vector(components);
				assert.equal(v.get(index), expected);
			});
		});
	});

	describe('Vector.prototype.set', function () {
		const components = [0, 1, 2];
		[
			[0, 7],
			[1, 8],
			[2, 9],
		]
		.forEach(([index, expected]) => {
			it(`should return ${expected}`, function () {
				const v = new Vector(components);
				v.set(index, expected);
				assert.equal(v.get(index), expected);
			});
		});
	});

	describe('Vector.prototype.dim', function () {
		[
			[[0], 1],
			[[0, 0], 2],
			[[0, 0, 0], 3],
		]
		.forEach(([components, expected]) => {
			it(`should return ${expected}`, function () {
				const v = new Vector(components);
				assert.equal(v.dim, expected);
			});
		});
	});

	describe('Vector.prototype.add', function () {
		const components1 = [0, 1, 2];
		[
			[[0, 0, 0], [0, 1, 2]],
			[[3, 4, 5], [3, 5, 7]],
		]
		.forEach(([components2, expected]) => {
			it(`should return [${expected.join(', ')}]`, function () {
				const v1 = new Vector(components1);
				const v2 = new Vector(components2);
				assert.deepEqual(v1.add(v2).array, expected);
			});
		});
	});

	describe('Vector.prototype.subtract', function () {
		const components1 = [0, 1, 2];
		[
			[[0, 0, 0], [0, 1, 2]],
			[[3, 4, 5], [-3, -3, -3]],
		]
		.forEach(([components2, expected]) => {
			it(`should return [${expected.join(', ')}]`, function () {
				const v1 = new Vector(components1);
				const v2 = new Vector(components2);
				assert.deepEqual(v1.subtract(v2).array, expected);
			});
		});
	});

	describe('Vector.prototype.scale', function () {
		const components = [0, 1, 2];
		[
			[0, [0, 0, 0]],
			[1, [0, 1, 2]],
			[3, [0,3, 6]],
		]
		.forEach(([scalar, expected]) => {
			it(`should return [${expected.join(', ')}]`, function () {
				const v = new Vector(components);
				assert.deepEqual(v.scale(scalar).array, expected);
			});
		});
	});

	describe('Vector.prototype.norm (getter)', function () {
		[
			[[1], 1],
			[[3, 4], 5],
			[[5, 12], 13],
			[[1, 2, 8, 10], 13],
			[[1, 2, 2, 4, 12], 13],
		]
		.forEach(([components, expected]) => {
			it(`should return ${expected}`, function () {
				const v = new Vector(components);
				assert.approximately(v.norm, expected, delta);
			});
		});
	});

	describe('Vector.prototype.norm (setter)', function () {
		[
			[[1], 1],
			[[3, 4], 5],
			[[5, 12], 13],
			[[1, 2, 8, 10], 13],
			[[1, 2, 2, 4, 12], 13],
		]
		.forEach(([components, norm]) => {
			it(`should return [${components.join(', ')}]`, function () {
				const v = new Vector(components).scale(100);
				v.norm = norm;
				assert.approximately(v.norm, norm, delta);
				components
				.forEach((component, index) => {
					assert.approximately(v.get(index), component, delta);
				});
			});
		});
	});

	describe('Vector.prototype.toString', function () {
		[
			[[1], 2, '', '1.00'],
			[[3, 4], 1, '-', '3.0-4.0'],
			[[5, 12], 0, ', ', '5, 12'],
		]
		.forEach(([components, digits, separator, expected]) => {
			it(`should return ${expected}`, function () {
				const v = new Vector(components);
				assert.equal(v.toString(digits, separator), expected);
			});
		});
	});

});

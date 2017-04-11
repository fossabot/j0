import Symbol from '../..';

describe('Symbol/polyfill', function () {

	it('should generate a new symbol', function () {
		const s1 = Symbol();
		const s2 = Symbol();
		assert.equal(s1 !== s2, true);
	});

	it('should generate a new symbol even if they have same key', function () {
		const key = 'key';
		const s1 = Symbol(key);
		const s2 = Symbol(key);
		assert.equal(s1 !== s2, true);
	});

	it('should generate a new symbol unless the symbol has created by Symbol.for', function () {
		const key = 'key';
		const s1 = Symbol(key);
		const s2 = Symbol.for(key);
		assert.equal(s1 !== s2, true);
	});

	it('should get a symbol from a key', function () {
		const key = 'key1';
		const s = Symbol.for(key);
		assert.equal(Symbol.for(key), s);
	});

	it('should get a key from a symbol', function () {
		const key = 'key1';
		const s = Symbol.for(key);
		assert.equal(Symbol.keyFor(s), key);
	});

	it('should have Symbol.iterator', function () {
		assert.equal(!Symbol.iterator, false);
	});

});

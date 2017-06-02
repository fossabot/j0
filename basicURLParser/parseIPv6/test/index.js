/* eslint-disable no-magic-numbers */
import parseIPv6 from '..';
import {FAILURE} from '../../constants';

describe('basicURLParser/parseIPv6', function () {

	it('should fail to parse a ip', function () {
		const actual = parseIPv6('');
		const expected = FAILURE;
		assert.deepEqual(actual, expected);
	});

	it('should parse 0123:4567:89ab:def:0000:0000:0123:4567', function () {
		const actual = parseIPv6('0123:4567:89ab:cdef:0000:0000:0123:4567');
		const expected = [
			0x0123,
			0x4567,
			0x89ab,
			0xcdef,
			0x0000,
			0x0000,
			0x0123,
			0x4567
		];
		assert.deepEqual(Array.from(actual), expected);
	});

	it('should parse 123:4567:89ab:def:0000:0000:123:4567', function () {
		const actual = parseIPv6('123:4567:89ab:cdef:0000:0000:123:4567');
		const expected = [
			0x0123,
			0x4567,
			0x89ab,
			0xcdef,
			0x0000,
			0x0000,
			0x0123,
			0x4567
		];
		assert.deepEqual(Array.from(actual), expected);
	});

	it('should parse 123:4567:89ab:def::0000:123:4567', function () {
		const actual = parseIPv6('123:4567:89ab:cdef::0000:123:4567');
		const expected = [
			0x0123,
			0x4567,
			0x89ab,
			0xcdef,
			0x0000,
			0x0000,
			0x0123,
			0x4567
		];
		assert.deepEqual(Array.from(actual), expected);
	});

	it('should parse 123:4567:89ab:def::123:4567', function () {
		const actual = parseIPv6('123:4567:89ab:cdef::123:4567');
		const expected = [
			0x0123,
			0x4567,
			0x89ab,
			0xcdef,
			0x0000,
			0x0000,
			0x0123,
			0x4567
		];
		assert.deepEqual(Array.from(actual), expected);
	});

	it('should parse 123:4567:89ab:def::192.1.2.3', function () {
		const actual = parseIPv6('123:4567:89ab:cdef::192.1.2.3');
		const expected = [
			0x0123,
			0x4567,
			0x89ab,
			0xcdef,
			0x0000,
			0x0000,
			192 * 256 + 1,
			2 * 256 + 3
		];
		assert.deepEqual(Array.from(actual), expected);
	});

});

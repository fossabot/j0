import parseOpaqueHost from '..';
import {FAILURE} from '../../constants';

describe('basicURLParser/parseOpaqueHost', function () {

	it('should fail to parse a hostname', function () {
		const source = '';
		const expected = FAILURE;
		assert.equal(parseOpaqueHost(source), expected);
	});

	it('should parse a hostname includes non-ascii characters', function () {
		const source = 'こんにちは.j0';
		const expected = `${encodeURIComponent('こんにちは')}.j0`;
		assert.equal(parseOpaqueHost(source), expected);
	});

});

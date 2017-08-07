import formatDate from '../index.js';

const tests = [
	['2016-01-02T03:04:05Z', '%YYYY,%YY,%MMMM,%MMM,%MM,%M,%DD,%D,%dddd,%ddd', '2016,16,January,Jan,01,1,02,2,Saturday,Sat'],
	['2016-01-02T03:04:05Z', '%hh,%h,%mm,%m,%ss,%s', '03,3,04,4,05,5']
];

describe('formatDate', function () {

	for (const [src, template, expected] of tests) {
		it(`formatDate(${src}, ${template}) returns ${expected}`, function () {
			assert.equal(formatDate(src, template, true), expected);
		});
	}

});

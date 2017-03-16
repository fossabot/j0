import assert from 'assert';
import Promise from '../../Promise';
import Date from '../../Date';
import setTimeout from '..';

const WAIT = 100;
const MARGIN = 0.9;

describe('setTimeout', function () {

	it(`should call fn after ${WAIT}ms`, function () {
		const start = Date.now();
		return new Promise((resolve) => {
			setTimeout(resolve, WAIT);
		})
		.then(() => {
			const elapsed = Date.now() - start;
			assert.equal(WAIT * MARGIN < elapsed, true);
		});
	});

});

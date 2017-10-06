import {
	browser,
	navigator,
} from 'j0';

describe('browser', function () {

	it(`should have browser: ${browser.name}`, function () {
		assert(browser.name, navigator.userAgent);
	});

	it(`should have version: ${browser.version}`, function () {
		assert(browser.version, navigator.userAgent);
	});

});

var assert = require('assert');
var navigator = require('../lib/navigator');
var isString = require('../lib/isString');

describe('navigator', function () {

	it('should be a navigator object', function () {
		assert.deepEqual([
			isString(navigator.appCodeName),
			isString(navigator.appName),
			isString(navigator.appVersion),
			isString(navigator.platform),
			isString(navigator.product),
			isString(navigator.userAgent),
			isString(navigator.vendor)
		], [
			true,
			true,
			true,
			true,
			true,
			true,
			true
		]);
	});
});

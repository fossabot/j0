/* global browser, $$ */
const chalk = require('chalk');
const console = require('j1/console').create('wdio');

const lengthToRemoveArrowMark = -2;
const waitBody = 3000;
const retry = 10;

browser.setViewportSize({
	width: 600,
	height: 600
});

{{#modules}}
describe('{{name}}', function () {

	before(function () {
		this.timeout(30000);
		console.info('start: {{name}}');
		this.retries(retry);
		browser.url('{{url}}');
		browser.waitForExist('body.done', waitBody);
		console.info('end: {{name}}');
	});

	it('should pass the tests', function () {
		const classes = browser.getAttribute('body', 'class').split(/\s+/);
		if (classes.includes('passed')) {
			return;
		}
		throw new Error('failed: {{name}}');
	});

});
{{/modules}}

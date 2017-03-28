/* global browser, $$ */
const chalk = require('chalk');
const console = require('j1/console').create('wdio');

const lengthToRemoveArrowMark = -2;
const waitBody = 1000;
const retry = 8;

describe('{{name}}', function () {

	browser.url('{{url}}');

	before(function () {
		this.retries(retry);
		browser.waitForExist('body.done', waitBody);
	});

	it('should pass the tests', function () {
		const tests = $$('.test') || [];
		for (const test of tests) {
			const name = test.$('h2').getText()
			.slice(0, lengthToRemoveArrowMark);
			const passed = test.getAttribute('class')
			.split(/\s+/)
			.includes('pass');
			if (passed) {
				console.log(`    ${chalk.green('✓')} ${name}`);
			} else {
				const error = test.$('error').getText();
				console.log(`    ${chalk.red(name)}\n${error}`);
				throw error;
			}
		}
	});

});

/* global browser, $$ */
const chalk = require('chalk');
const console = require('j1/console').create('wdio');

const lengthToRemoveArrowMark = -2;
const waitBody = 3000;

describe('{{name}}', function () {

	before(function () {
		browser.url('{{url}}');
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

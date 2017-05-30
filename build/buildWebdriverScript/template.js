/* global browser, $$ */
const chalk = require('chalk');
const console = require('j1/console').create('wdio');

const lengthToRemoveArrowMark = -2;
const waitBody = 3000;
const timeout = 10000;
const retry = 10;

browser.setViewportSize({
	width: 600,
	height: 600
});

describe('Test All', function () {

	before(function () {
		const started = Date.now();
		this.timeout(timeout);
		console.info('start');
		this.retries(retry);
		browser.url('PAGE_URL');
		browser.waitForExist('body.done', waitBody);
		console.info(`end: ${Date.now() - started}ms`);
	});

	it('should pass the tests', function () {
		const start = Date.now();
		const failed = [];
		$$('.suite')
		.forEach((suite) => {
			const title = suite.$('h1').getText();
			const tests = [];
			console.info(title);
			suite.$$('.test')
			.forEach((element) => {
				const attr = element.getAttribute('class').trim()
				.split(/\s+/);
				const description = element.$('h2').getText()
				.slice(0, lengthToRemoveArrowMark);
				if (attr.includes('pass')) {
					console.debug(`[passed] ${description}`);
				} else {
					console.error(`[failed] ${description}`);
					tests.push(description);
				}
				this.timeout(timeout + Date.now() - start);
			});
			if (0 < tests.length) {
				failed.push({
					title,
					tests
				});
			}
		});
		if (0 < failed.length) {
			failed
			.forEach(({title, tests}) => {
				console.log(chalk.red(`Failed: ${title}`));
				tests
				.forEach((description) => {
					console.log(`  ${description}`);
				});
			});
			throw new Error('failed');
		}
	});

});

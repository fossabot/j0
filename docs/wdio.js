/* eslint-disable no-magic-numbers */
/* global browser, $$ */
const path = require('path');
const chalk = require('chalk');
const console = require('j1/console').create('wdio');
const writeFile = require('j1/writeFile');
const formatDate = require('j1/formatDate');

browser.setViewportSize({
	width: 600,
	height: 600
});

describe('Test All', function () {

	before(function () {
		this.timeout(30000);
		browser.url('http://127.0.0.1:4000/');
		browser.waitForExist('body');
	});

	it('should end the tests', function () {
		const retry = 10;
		const interval = 6000;
		this.timeout(interval * retry);
		this.retries(retry);
		browser.waitForExist('body.done', interval);
	});

	it('should pass the tests', function () {
		const lengthToRemoveArrowMark = -2;
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
				this.timeout(3000 + Date.now() - start);
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

	it('should take a screenshot', async function () {
		const rawData = browser.screenshot();
		const data = Buffer.from(rawData.value, 'base64');
		const dest = path.join(
			__dirname,
			'..',
			'__errorShots',
			`${formatDate(new Date(), '%YYYY-%MM-%DD-%hh-%mm-%ss')}.png`
		);
		await writeFile(dest, data);
	});

});

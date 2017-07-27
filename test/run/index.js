const {Builder} = require('selenium-webdriver');
const $console = require('j1/console').create('test:run');
const useBrowserStack = require('../useBrowserStack');
const getCapabilityText = require('../getCapabilityText');
const waitForTestCompletion = require('../waitForTestCompletion');
const waitForTestStart = require('../waitForTestStart');
const session = require('..');

async function run(capabilities = require('../capabilities')) {
	const capability = capabilities.shift();
	if (!capability) {
		return;
	}
	const prefix = getCapabilityText(capability);
	const console = $console.create(prefix);
	if (useBrowserStack) {
		Object.assign(
			capability,
			{
				'browserstack.local': true,
				'browserstack.localIdentifier': session.localIdentifier,
				'browserstack.user': useBrowserStack.user,
				'browserstack.key': useBrowserStack.key
			}
		)
	}
	const builder = new Builder()
	.withCapabilities(capability);
	if (useBrowserStack) {
		builder.usingServer('http://hub-cloud.browserstack.com/wd/hub')
	}
	console.info('build a driver');
	const driver = builder.build();
	driver.prefix = prefix;
	const url = `http://localhost:${session.port}/`;
	console.info(`GET ${url}`);
	await driver.get(url);
	await waitForTestStart(driver);
	await waitForTestCompletion(driver);
	const title = await driver.getTitle();
	console.info(`title: ${title}`);
	await driver.quit();
	console.info('done');
	await run(capabilities);
}

module.exports = run;

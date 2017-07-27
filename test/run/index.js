const {Builder} = require('selenium-webdriver');
const $console = require('j1/console').create('test:run');
const useBrowserStack = require('../useBrowserStack');
const getCapabilityText = require('../getCapabilityText');
const waitForTestCompletion = require('../waitForTestCompletion');
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
	console.info('access');
	await driver.get(`http://localhost:${session.port}/`);
	console.info('wait until all tests are run');
	await waitForTestCompletion(driver);
	const title = await driver.getTitle();
	console.info(`title: ${title}`);
	await driver.quit();
	await run(capabilities);
	console.info('done');
}

module.exports = run;

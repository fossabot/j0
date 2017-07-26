const assert = require('assert');
const {Builder} = require('selenium-webdriver');
const $console = require('j1/console').create('test');
const isString = require('j1/isString');
const useBrowserStack = require('./useBrowserStack');

function getCapabilityText(capability) {
	const fields = [];
	for (const key of Object.keys(capability)) {
		const value = capability[key];
		if (isString(value)) {
			fields.push(value);
		}
	}
	return fields.join(',');
}

async function test(capabilities = require('./capabilities')) {
	const capability = capabilities.shift();
	if (!capability) {
		return;
	}
	const console = $console.create(getCapabilityText(capability));
	const builder = new Builder()
	.withCapabilities(capability);
	if (useBrowserStack) {
		builder.usingServer('http://hub-cloud.browserstack.com/wd/hub')
	}
	console.info('build a driver');
	const driver = builder.build();
	console.info('access');
	await driver.get('http://webdriver.io/');
	const title = await driver.getTitle();
	console.info(title);
	assert.equal((/webdriver/i).test(title), true);
	await test(capabilities);
}

test()
.catch((error) => {
	$console.onError(error);
	process.exit(1);
});

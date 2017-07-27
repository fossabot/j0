const {Builder} = require('selenium-webdriver');
const $console = require('j1/console').create('test:run');
const useBrowserStack = require('../useBrowserStack');
const getCapabilityText = require('../getCapabilityText');
const waitForTestCompletion = require('../waitForTestCompletion');
const waitForTestStart = require('../waitForTestStart');
const getResults = require('../getResults');
const markResult = require('../markResult');
const session = require('..');

async function run(
	capabilities = require('../capabilities'),
	errors = new Set()
) {
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
	const caughtErrors = await getResults(driver);
	const {pass, fail} = caughtErrors.counts;
	console.info(`done. passes: ${pass}, failures: ${fail}`);
	if (0 < caughtErrors.size) {
		// Array.from(caughtErrors)
		// .forEach((error, index, {length}) => {
		// 	console.info(`[${index + 1}/${length}] ${error.stack}`);
		// 	console.error(chalk.red(`${error}`));
		// });
		const error = new Error(`Caught ${caughtErrors.size} errors`);
		error.capability = capability;
		errors.add(error);
		await markResult(driver, error);
	} else {
		await markResult(driver);
	}
	await driver.quit();
	await run(capabilities, errors);
	if (0 < errors.size) {
		throw new Error([
			`${errors.size} capabilities failed`,
			...Array.from(errors)
			.map((error, index, {length}) => {
				return `  [${index + 1}/${length}] ${getCapabilityText(error.capability)} ${error}`;
			})
		].join('\n'));
	}
}

module.exports = run;

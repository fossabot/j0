const {By} = require('selenium-webdriver');
const wait = require('j1/wait');
const $console = require('j1/console');

async function waitForTestStart(
	driver,
	count = 10,
	console = $console.create(`${driver.prefix}:waitForTestStart`)
) {
	console.info(`retry: ${count}`);
	try {
		await driver.findElement(By.css('#mocha-stats'));
		return;
	} catch (error) {
		if (0 < count) {
			await wait(500);
			await waitForTestStart(driver, count - 1);
			return;
		}
		throw error;
	}
}

module.exports = waitForTestStart;

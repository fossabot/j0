const {By} = require('selenium-webdriver');
const $console = require('j1/console');
const wait = require('j1/wait');

async function checkDone(driver) {
	const bodyElement = await driver.findElement(By.css('body'));
	const classNames = await bodyElement.getAttribute('class');
	return new Set(classNames.split(/\s+/));
}

async function printStats(driver, console) {
	const results = await Promise.all(
		['passes', 'failures', 'duration']
		.map(async (className) => {
			const element = await driver.findElement(By.css(`#mocha-stats>.${className}`));
			const text = await element.getText();
			return text;
		})
	)
	console.info(results.join(', '));
}

async function waitForTestCompletion(
	driver,
	console = $console.create(`${driver.prefix}:waitForTestCompletion`)
) {
	const [classNames] = await Promise.all([
		checkDone(driver),
		printStats(driver, console)
	]);
	if (classNames.has('done')) {
		console.info('done');
		return;
	} else {
		await wait(500);
		await waitForTestCompletion(driver, console);
	}
}

module.exports = waitForTestCompletion;

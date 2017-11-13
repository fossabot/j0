const chalk = require('chalk');
const {By} = require('selenium-webdriver');
const $console = require('j1/console');

async function getStack(element, stack = []) {
	const parentElement = await element.findElement(By.xpath('parent::node()'));
	const classNames = new Set((await parentElement.getAttribute('class')).split(/\s+/));
	const id = await parentElement.getAttribute('id');
	if (id === 'mocha') {
		return stack.join('>');
	}
	if (classNames.has('suite')) {
		const titleElement = await parentElement.findElement(By.css('h1'));
		stack.unshift(await titleElement.getText());
	}
	return getStack(parentElement, stack);
}

async function getResults(driver) {
	const console = $console.create(`${driver.prefix}:getResults`);
	const errors = new Set();
	console.info('get the results');
	const passedTestElements = await driver.findElements(By.css('.test.pass'));
	const failedTestElements = await driver.findElements(By.css('.test.fail'));
	const {length: errorCount} = failedTestElements;
	if (0 < errorCount) {
		console.info(`caught ${errorCount} errors`);
		let i = 0;
		for (const element of failedTestElements) {
			const {x, y} = await element.getLocation();
			await driver.executeScript(`scrollTo(${x}, ${y})`);
			const errorElement = element.findElement(By.className('error'));
			const errorText = await errorElement.getText();
			const error = new Error(errorText);
			error.stack = await getStack(element);
			errors.add(error);
			const titleElement = await element.findElement(By.css('h2'));
			console.error(chalk.red([
				'',
				`[${i + 1}/${errorCount}] ${error.stack}`,
				`  ${(await titleElement.getText()).slice(0, -2)}`,
				...errorText.split(/\r\n|\r|\n/)
				.map((line) => {
					return `  ${line}`;
				})
			].join('\n')));
			i += 1;
		}
	}
	errors.counts = {
		pass: passedTestElements.length,
		fail: errorCount
	};
	return errors;
}

module.exports = getResults;

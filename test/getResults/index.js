const chalk = require('chalk');
const {By} = require('selenium-webdriver');
const $console = require('j1/console');
const padding = '  ';

async function getResults(
	driver,
	elements,
	console = $console.create(`${driver.prefix}:getResults`),
	route,
	errors = new Set()
) {
	if (!elements) {
		console.info('get the root element');
		elements = [await driver.findElement(By.id('mocha'))];
	}
	const element = elements.shift();
	if (element) {
		const classNames = new Set((await element.getAttribute('class')).split(/\s+/));
		if (classNames.has('test')) {
			const {x, y} = await element.getLocation();
			await driver.executeScript(`scrollTo(${x - 100}, ${y - 100})`);
			const failed = classNames.has('fail');
			const titleElement = await element.findElement(By.css('h2'));
			console.log([
				padding.repeat(route.length),
				failed ? chalk.red('✖') : chalk.green('✓'),
				(await titleElement.getText()).slice(0, -2)
			].join(' '));
			if (failed) {
				errors.counts.fail++;
				const errorElement = element.findElement(By.className('error'));
				const error = new Error(await errorElement.getText());
				error.route = route;
				errors.add(error);
			} else {
				errors.counts.pass++;
			}
		} else {
			const [h1, ul] = await element.findElements(By.xpath('*'));
			const title = await h1.getText();
			if (route) {
				console.log(`${padding.repeat(route.length)}${title}`);
			} else {
				errors.counts = {
					pass: 0,
					fail: 0
				};
			}
			await getResults(
				driver,
				await ul.findElements(By.xpath('*')),
				console,
				route ? [...route, title] : [],
				errors
			);
		}
		await getResults(
			driver,
			elements,
			console,
			route,
			errors
		);
	}
	return errors;
}

module.exports = getResults;

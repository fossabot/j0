const path = require('path');
const SableServer = require('sable');
const browserstack = require('browserstack-local');
const {Builder} = require('selenium-webdriver');
const $console = require('j1/console').create('test');
const isString = require('j1/isString');
const promisify = require('j1/promisify');
const useBrowserStack = require('./useBrowserStack');

function getCapabilityText(capability) {
	const fields = [];
	for (const key of ['os', 'os_version', 'browser', 'browser_version', 'resolution']) {
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
	await driver.get(`http://localhost:${exports.port}/`);
	const title = await driver.getTitle();
	console.info(title);
	await driver.quit();
	await test(capabilities);
}

async function onEnd() {
	if (exports.server) {
		await exports.server.close();
	}
	if (exports.bsLocal) {
		await exports.bsLocal.stop();
	}
	if (exports.driver) {
		await exports.driver.quit();
	}
}

Promise.resolve()
.then(async () => {
	const server = new SableServer({
		documentRoot: path.join(__dirname, '..', 'docs'),
		noWatch: true,
		quiet: true
	});
	exports.server = server;
	await server.start();
	const {port} = server.address();
	exports.port = port;
	if (useBrowserStack) {
		const bsLocal = new browserstack.Local();
		exports.bsLocal = bsLocal;
		await promisify(bsLocal.start, bsLocal)({
			// https://github.com/browserstack/browserstack-local-nodejs/blob/master/lib/Local.js
			verbose: true,
			forceLocal: true,
			onlyAutomate: true,
			onlyCommand: true,
			only: `localhost,${port},0`
		});
	}
	await test();
	await onEnd();
})
.catch(async (error) => {
	await onEnd();
	throw error;
})
.catch((error) => {
	$console.onError(error);
	process.exit(1);
});

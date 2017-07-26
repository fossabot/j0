const path = require('path');
const SableServer = require('sable');
const browserstack = require('browserstack-local');
const {Builder} = require('selenium-webdriver');
const $console = require('j1/console').create('test');
const promisify = require('j1/promisify');
const useBrowserStack = require('./useBrowserStack');
const getCapabilityText = require('./getCapabilityText');
const waitRun = require('./waitRun');

async function test(capabilities = require('./capabilities')) {
	const capability = capabilities.shift();
	if (!capability) {
		return;
	}
	const console = $console.create(getCapabilityText(capability));
	if (useBrowserStack) {
		Object.assign(
			capability,
			{
				'browserstack.local': true,
				'browserstack.localIdentifier': exports.localIdentifier,
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
		await promisify(exports.bsLocal.stop, exports.bsLocal)();
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
	$console.info('start a server');
	await server.start();
	const {port} = server.address();
	exports.port = port;
	if (useBrowserStack) {
		const bsLocal = new browserstack.Local();
		exports.bsLocal = bsLocal;
		exports.localIdentifier = `${Date.now()}`;
		$console.info(`start a browserstack-local ${port}`);
		await promisify(bsLocal.start, bsLocal)({
			// https://github.com/browserstack/browserstack-local-nodejs/blob/master/lib/Local.js
			key: useBrowserStack.key,
			verbose: true,
			forceLocal: true,
			onlyAutomate: true,
			only: `localhost,${port},0`,
			localIdentifier: exports.localIdentifier
		});
		await waitRun(bsLocal);
	}
	$console.info('start test');
	await test();
	$console.info('done');
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

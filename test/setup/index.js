const path = require('path');
const SableServer = require('sable');
const browserstack = require('browserstack-local');
const promisify = require('j1/promisify');
const console = require('j1/console').create('test:setup');
const useBrowserStack = require('../useBrowserStack');
const waitBrowserStackLocalSetup = require('../waitBrowserStackLocalSetup');
const session = require('..');

async function setup() {
	const server = new SableServer({
		documentRoot: path.join(__dirname, '..', '..', 'docs'),
		noWatch: true,
		quiet: true
	});
	session.server = server;
	console.info('start a server');
	await server.start();
	const {port} = server.address();
	session.port = port;
	if (useBrowserStack) {
		const bsLocal = new browserstack.Local();
		session.bsLocal = bsLocal;
		session.localIdentifier = `${Date.now()}`;
		console.info(`start a browserstack-local ${port}`);
		await promisify(bsLocal.start, bsLocal)({
			// https://github.com/browserstack/browserstack-local-nodejs/blob/master/lib/Local.js
			key: useBrowserStack.key,
			verbose: true,
			forceLocal: true,
			onlyAutomate: true,
			only: `localhost,${port},0`,
			localIdentifier: session.localIdentifier
		});
		await waitBrowserStackLocalSetup(bsLocal);
	}
	console.info('done');
}

module.exports = setup;

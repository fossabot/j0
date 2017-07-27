const promisify = require('j1/promisify');
const console = require('j1/console').create('test:onEnd');
const session = require('..');

async function onEnd(error) {
	if (session.server) {
		console.info('close the server');
		await session.server.close();
	}
	if (session.bsLocal) {
		console.info('stop the bsLocal');
		await promisify(session.bsLocal.stop, session.bsLocal)();
	}
	if (session.driver) {
		console.info('quit the driver');
		await session.driver.quit();
	}
	if (error) {
		throw error;
	}
}

module.exports = onEnd;

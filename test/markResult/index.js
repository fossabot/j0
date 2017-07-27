const https = require('https');
const useBrowserStack = require('../useBrowserStack');
const $console = require('j1/console').create('test:run');

async function markResult(driver, error = '') {
	if (!useBrowserStack) {
		return;
	}
	const console = $console.create(`${driver.prefix}:markResult`);
	const session = await driver.getSession();
	const sessionId = session.getId();
	const {user, key} = useBrowserStack;
	await new Promise((resolve, reject) => {
		const status = error ? 'failed' : 'passed';
		console.info(`mark as ${status}`);
		https.request({
			method: 'PUT',
			host: 'www.browserstack.com',
			path: `/automate/sessions/${sessionId}.json`,
			auth: `${user}:${key}`,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		.once('error', reject)
		.once('response', resolve)
		.end(JSON.stringify({
			status,
			reason: `${error}`
		}));
	});
}

module.exports = markResult;

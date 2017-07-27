const https = require('https');
const useBrowserStack = require('../useBrowserStack');

async function markResult(driver, error = '') {
	if (!useBrowserStack) {
		return;
	}
	const session = await driver.getSession();
	const sessionId = session.getId();
	const {user, key} = useBrowserStack;
	await new Promise((resolve, reject) => {
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
			status: error ? 'failed' : 'passed',
			reason: `${error}`
		}));
	});
}

module.exports = markResult;

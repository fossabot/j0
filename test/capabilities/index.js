const formatDate = require('j1/formatDate');
const useBrowserStack = require('../useBrowserStack');
if (useBrowserStack) {
	module.exports = [
		{
			os: 'OS X',
			os_version: 'Sierra',
			browserName: 'Safari',
			browser_version: '10.0',
			resolution: '1024x768'
		},
		{
			os: 'Windows',
			os_version: '10',
			browserName: 'IE',
			browser_version: '11.0',
			resolution: '1024x768'
		}
	]
	.map((capability) => {
		return Object.assign(
			capability,
			{
				'browserstack.user': useBrowserStack.user,
				'browserstack.key': useBrowserStack.key,
				'browserstack.local': true
			}
		);
	});
} else {
	module.exports = [
		{
			browserName: 'chrome',
			chromeOptions: {
				args: [
					'--headless'
				]
			}
		}
	];
}
module.exports
.map((capability) => {
	return Object.assign(
		capability,
		{
			project: process.env.TRAVIS_REPO_SLUG || 'kei-ito/j0',
			build: process.env.TRAVIS_BUILD_NUMBER || formatDate(new Date(), '%YYYY-%MM-%DD-%hh-%mm'),
		}
	);
});

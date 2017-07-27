const formatDate = require('j1/formatDate');
const useBrowserStack = require('../useBrowserStack');
if (useBrowserStack) {
	module.exports = [
		{
			os: 'OS X',
			os_version: 'Sierra',
			browserName: 'Chrome'
		}
		// {
		// 	os: 'OS X',
		// 	os_version: 'Sierra',
		// 	browserName: 'Firefox'
		// },
		// {
		// 	os: 'OS X',
		// 	os_version: 'Sierra',
		// 	browserName: 'Safari'
		// },
		// {
		// 	os: 'Windows',
		// 	os_version: '10',
		// 	browserName: 'IE',
		// 	browser_version: '11'
		// },
		// {
		// 	os: 'Windows',
		// 	os_version: '10',
		// 	browserName: 'IE',
		// 	browser_version: '10'
		// }
	];
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

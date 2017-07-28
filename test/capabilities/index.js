const useBrowserStack = require('../useBrowserStack');
if (useBrowserStack) {
	module.exports = [
		{
			os: 'OS X',
			os_version: 'Sierra',
			browserName: 'Chrome'
		},
		{
			os: 'OS X',
			os_version: 'Sierra',
			browserName: 'Firefox'
		},
		{
			os: 'OS X',
			os_version: 'Sierra',
			browserName: 'Safari'
		},
		{
			os: 'Windows',
			os_version: '10',
			browserName: 'IE'
		},
		{
			os: 'Windows',
			os_version: '10',
			browserName: 'Chrome'
		},
		{
			os: 'Windows',
			os_version: '10',
			browserName: 'Firefox'
		},
		{
			browserName: 'iPhone',
			platform: 'MAC',
			device: 'iPhone 6S'
		}
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

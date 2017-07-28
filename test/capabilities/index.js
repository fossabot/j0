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
		// {
		// 	os: 'OS X',
		// 	os_version: 'Sierra',
		// 	browserName: 'Opera'
		// },
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
			device: 'iPhone 7',
			realMobile: 'true',
			os_version: '10.0'
		},
		{
			browserName: 'iPad',
			platform: 'MAC',
			device: 'iPad Pro'
		},
		{
			device: 'Google Pixel',
			realMobile: 'true',
			os_version: '7.1'
		},
		{
			device: 'Google Nexus 9',
			realMobile: 'true',
			os_version: '5.1'
		},
		{
			device: 'Samsung Galaxy S7',
			realMobile: 'true',
			os_version: '6.0'
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

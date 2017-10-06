import {
	navigator,
	parseInt,
} from 'j0';

const browser = {};

navigator.userAgent
.replace(/safari\/([\d.]+)/i, function (match, version) {
	browser.name = 'safari';
	browser.version = version;
})
.replace(/chrome\/([\d.]+)/i, function (match, version) {
	browser.name = 'chrome';
	browser.version = version;
})
.replace(/firefox\/([\d.]+)/i, function (match, version) {
	browser.name = 'firefox';
	browser.version = version;
})
.replace(/edge\/([\d.]+)/i, function (match, version) {
	browser.name = 'edge';
	browser.version = version;
})
.replace(/trident\/([\d.]+)/i, function (match, version) {
	browser.name = 'ie';
	browser.version = version.replace(/^\d+/, function (majorVersion) {
		return parseInt(majorVersion, 10) + 4;
	});
});

export default browser;

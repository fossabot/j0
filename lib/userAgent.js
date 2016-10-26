var window = require('./window');
var navigator = window.navigator;
var contains = function (x, y) {
	return 0 < x.indexOf(y);
};
var toLowerCase = function (x) {
	return x.toLowerCase();
};
var appVersion = toLowerCase(navigator.appVersion || '').replace(/\s/g, '');
var platform = toLowerCase(navigator.platform || '');
var ie = contains(appVersion, 'msie') || contains(appVersion, 'trident');
var edge = contains(appVersion, 'edge');
var ua = toLowerCase(navigator.userAgent);
module.exports = {
	ie: ie,
	edge: edge,
	ms: ie || edge,
	firefox: /firefox/.test(ua),
	ios: /ipad|iphone|ipod/i.test(platform),
	android: /android/i.test(ua),
	touch: ('ontouchstart' in window) || (0 < navigator.MaxTouchPoints) || (0 < navigator.msMaxTouchPoints)
};

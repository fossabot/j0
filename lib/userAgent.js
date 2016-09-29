module.exports = (function (navigator, window) {
	var contains = function (x, y) {
		return 0 < x.indexOf(y);
	};
	var toLowerCase = function (x) {
		return x.toLowerCase();
	};
	var appName = toLowerCase(navigator.appName || '').replace(/\s/g, '');
	var appVersion = toLowerCase(navigator.appVersion || '').replace(/\s/g, '');
	var platform = toLowerCase(navigator.platform || '');
	var ie = contains(appVersion, 'msie') || contains(appName, 'internetexplorer') || contains(appVersion, 'trident');
	var edge = contains(appVersion, 'edge');
	return {
		ie: ie,
		edge: edge,
		ms: ie || edge,
		ios: /ipad|iphone|ipod/i.test(platform),
		android: /android/i.test(navigator.userAgent),
		touch: ('ontouchstart' in window) || (0 < navigator.MaxTouchPoints) || (0 < navigator.msMaxTouchPoints)
	};
})(navigator, require('./window'));

import {
	window
} from 'j0';
import J0URL from './j0polyfill';
try {
	const u = new window.URL('b', 'http://a');
	u.pathname = 'c%20d';
	if (u.href !== 'http://a/c%20d') {
		throw URL;
	}
} catch (e) {
	window.URL = J0URL;
}

import {
	window
} from 'j0';
import J0URL from './j0polyfill/index.js';
try {
	const u = new window.URL('b', 'http://a');
	u.pathname = 'cd';
	if (u.href !== 'http://a/cd') {
		throw u;
	}
} catch (e) {
	window.URL = J0URL;
}

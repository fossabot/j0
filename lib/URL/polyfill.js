import {
	window
} from 'j0';
import J0URL from './j0polyfill/index.js';
try {
	const u = new window.URL('/?q#h', 'https://u:p@g.co:8000');
	u.pathname = 'path';
	if (
		u.hash !== '#h' ||
		u.search !== '?q' ||
		u.port !== '8000' ||
		u.hostname !== 'g.co' ||
		u.protocol !== 'https:' ||
		u.href !== 'https://u:p@g.co:8000/path?q#h'
	) {
		throw u;
	}
} catch (e) {
	window.URL = J0URL;
}

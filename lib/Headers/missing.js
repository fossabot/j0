import {window} from 'j0';
import J0Headers from './j0polyfill/index.js';

if (window.Headers) {
	const headers = new window.Headers();
	try {
		headers.entries();
	} catch (error) {
		window.Headers = J0Headers;
	}
} else {
	window.Headers = J0Headers;
}

import {
	window,
	J0Storage,
	console
} from 'j0';

let storage;
const name = `${Date.now()}`;
const value = new Date().toISOString();
const key = 'localStorageIsAvailable';
try {
	storage = window.localStorage;
	storage.setItem(name, value);
	storage.removeItem(name);
	window[key] = true;
} catch (e) {
	try {
		window.localStorage = new J0Storage();
		window[key] = true;
	} catch (e) {
		window[key] = false;
		console.info('localStorage is unavailable and polyfill failed to override it.');
	}
}

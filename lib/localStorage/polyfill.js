import {
	window,
	J0Storage,
	console
} from 'j0';

let storage;
const name = `${Date.now()}`;
const value = new Date().toISOString();
try {
	storage = window.localStorage;
	storage.setItem(name, value);
	storage.removeItem(name);
} catch (e) {
	try {
		window.localStorage = new J0Storage();
	} catch (e) {
		window.localStorageIsUnavailable = true;
		console.info('localStorage is unavailable and protected.');
	}
}

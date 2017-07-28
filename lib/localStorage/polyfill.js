import {
	window,
	J0Storage
} from 'j0';

let storage;
const name = `${Date.now()}`;
const value = new Date().toISOString();
try {
	storage = window.localStorage;
	storage.setItem(name, value);
	storage.removeItem(name);
} catch (err) {
	window.localStorage = new J0Storage();
}

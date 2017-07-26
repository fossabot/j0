import {
	window,
	Storage
} from 'j0';

let storage;
try {
	storage = window.localStorage;
	storage.setItem('is', 'available');
} catch (err) {
	storage = 0;
}
if (storage) {
	storage.removeItem('is');
} else {
	storage = new Storage();
}
export default storage;

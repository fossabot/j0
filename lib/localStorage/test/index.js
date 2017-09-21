import {
	localStorageIsAvailable,
	console,
	localStorage,
} from 'j0';
import '../*/test/index.js';
import test from '../tests.js';
if (localStorageIsAvailable) {
	test(localStorage, 'localStorage');
} else {
	console.info('Tests for localStorage are skipped.');
}

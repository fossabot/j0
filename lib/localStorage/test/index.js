import {
	localStorageIsUnavailable,
	console
} from 'j0';
import '../*/test/index.js';
import test from '../tests.js';
if (localStorageIsUnavailable) {
	console.info('Tests for localStorage are skipped.');
} else {
	test(localStorage, 'localStorage');
}

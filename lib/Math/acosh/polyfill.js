import {Math} from 'j0';
import j0acosh from './j0polyfill';
if (!Math.acosh) {
	Math.acosh = j0acosh;
}

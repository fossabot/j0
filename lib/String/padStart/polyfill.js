import {
	String
} from 'j0';
import padStart from './j0polyfill';

try {
	if ('1'.padStart(3, '0') !== '001') {
		throw 0;
	}
} catch (error) {
	String.prototype.padStart = padStart;
}

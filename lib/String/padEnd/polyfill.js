import {
	String
} from 'j0';
import padEnd from './j0polyfill';

try {
	if ('1'.padEnd(3, '0') !== '100') {
		throw 0;
	}
} catch (error) {
	String.prototype.padEnd = padEnd;
}

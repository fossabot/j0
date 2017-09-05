import {
	String
} from 'j0';
import j0endsWith from './j0polyfill/index.js';
const {prototype} = String;
try {
	if (!('abc').endsWith('ab')) {
		throw String;
	}
} catch (error) {
	prototype.endsWith = j0endsWith;
}

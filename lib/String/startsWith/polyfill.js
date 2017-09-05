import {
	String
} from 'j0';
import j0startsWith from './j0polyfill/index.js';
const {prototype} = String;
try {
	if (!('abc').startsWith('ab')) {
		throw String;
	}
} catch (error) {
	prototype.startsWith = j0startsWith;
}

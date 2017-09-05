import {
	String
} from 'j0';
import j0includes from './j0polyfill/index.js';
const {prototype} = String;
try {
	if (!('abc').includes('b')) {
		throw String;
	}
} catch (error) {
	prototype.includes = j0includes;
}

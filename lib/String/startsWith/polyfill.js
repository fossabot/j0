import {
	String
} from 'j0';
import j0startsWith from './j0polyfill/index.js';
const {prototype} = String;
if (!prototype.startsWith) {
	prototype.startsWith = j0startsWith;
}

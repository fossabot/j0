import {
	String
} from 'j0';
import j0endsWith from './j0polyfill';
const {prototype} = String;
if (!prototype.endsWith) {
	prototype.endsWith = j0endsWith;
}

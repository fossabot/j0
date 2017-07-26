import {
	String
} from 'j0';
import j0Normalize from './j0polyfill';
const {prototype} = String;
if (!prototype.normalize) {
	prototype.normalize = j0Normalize;
}

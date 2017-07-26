import {String} from 'j0';
import j0CodePointAt from './j0polyfill';
const {prototype} = String;
if (!prototype.codePointAt) {
	prototype.codePointAt = j0CodePointAt;
}

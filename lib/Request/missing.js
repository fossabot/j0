import {window} from 'j0';
import J0Request from './j0polyfill';
if (!window.Request) {
	window.Request = J0Request;
}

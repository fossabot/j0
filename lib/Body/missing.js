import {window} from 'j0';
import J0Body from './j0polyfill';
if (!window.Body) {
	window.Body = J0Body;
}

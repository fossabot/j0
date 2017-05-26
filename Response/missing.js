import {window} from 'j0';
import J0Response from './j0polyfill';
if (!window.Response) {
	window.Response = J0Response;
}

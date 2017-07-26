import {window} from 'j0';
import J0URLSearchParams from './j0polyfill/index.js';
const {URLSearchParams} = window;
if (!(URLSearchParams && new URLSearchParams('?a=b').has('a'))) {
	window.URLSearchParams = J0URLSearchParams;
}

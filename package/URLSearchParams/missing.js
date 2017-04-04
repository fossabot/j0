import window from '../window';
import J0URLSearchParams from './j0';
const {URLSearchParams} = window;
if (!(URLSearchParams && new URLSearchParams('?a=b').has('a'))) {
	window.URLSearchParams = J0URLSearchParams;
}

import window from '../window';
import J0URLSearchParams from './J0URLSearchParams';
if (!window.URLSearchParams) {
	window.URLSearchParams = J0URLSearchParams;
}

import window from '../window';
import J0Headers from './j0';

if (!window.Headers) {
	window.Headers = J0Headers;
}

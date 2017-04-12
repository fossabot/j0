import window from '../window';
import j0Fetch from './j0';
if (!window.fetch) {
	window.fetch = j0Fetch;
}

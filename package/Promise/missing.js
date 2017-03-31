import window from '../window';
import J0Promise from './j0';

if (!window.Promise) {
	window.Promise = J0Promise;
}

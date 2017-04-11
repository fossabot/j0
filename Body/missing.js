import window from '../window';
import J0Body from './j0';
if (!window.Body) {
	window.Body = J0Body;
}

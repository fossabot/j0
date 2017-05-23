import {window} from '..';
import J0Response from './j0';
if (!window.Response) {
	window.Response = J0Response;
}

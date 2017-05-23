import {window} from '..';
import J0Request from './j0';
if (!window.Request) {
	window.Request = J0Request;
}

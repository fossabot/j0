import {window} from 'j0';
import J0Request from './j0';
if (!window.Request) {
	window.Request = J0Request;
}

import window from '../../window';
import J0Promise from '../J0Promise';

export default function () {
	if (!window.Promise) {
		window.Promise = J0Promise;
	}
}

import {window} from 'j0';
import J0Map from './j0polyfill';
let MAP = window.Map;
try {
	if (!MAP || !(new MAP([[0, 0]]).size === 1) || new Map([[1, 2]]).values().next().value !== 2) {
		throw 0;
	}
} catch (e) {
	MAP = J0Map;
}
window.Map = MAP;

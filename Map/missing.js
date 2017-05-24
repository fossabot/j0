import {window} from 'j0';
import J0Map from './j0';

let MAP = window.Map;

if (!MAP || !(new MAP([[0, 0]]).size === 1) || !MAP.prototype.forEach) {
	MAP = J0Map;
}

window.Map = MAP;

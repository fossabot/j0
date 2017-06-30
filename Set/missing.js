import {window} from 'j0';
import J0Set from './j0polyfill';
let SET = window.Set;
try {
	if (!SET || !(new SET([0]).size === 1) || new SET([0]).values().next().value !== 1) {
		throw 0;
	}
} catch (e) {
	SET = J0Set;
}

window.Set = SET;

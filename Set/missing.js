import {window} from '..';
import J0Set from './j0';

let SET = window.Set;

if (!SET || !(new SET([0]).size === 1) || !SET.prototype.forEach) {
	SET = J0Set;
}

window.Set = SET;

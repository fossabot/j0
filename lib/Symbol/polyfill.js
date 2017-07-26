import {window} from 'j0';
import J0Symbol from './j0/index.js';
if (!window.Symbol) {
	window.Symbol = J0Symbol;
}

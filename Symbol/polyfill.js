import {
	window
} from '..';
import J0Symbol from './j0';
if (!window.Symbol) {
	window.Symbol = J0Symbol;
}

import window from '../window';
import SymbolRegistry from './SymbolRegistry';

let {Symbol} = window;

if (typeof Symbol !== 'function') {
	/* eslint-disable prefer-destructuring */
	Symbol = new SymbolRegistry().Symbol;
	/* eslint-enable prefer-destructuring */
	window.Symbol = Symbol;
}

export default Symbol;

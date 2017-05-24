import {Number} from 'j0';
import J0MAX_SAFE_INTEGER from './j0';
if (!Number.MAX_SAFE_INTEGER) {
	Number.MAX_SAFE_INTEGER = J0MAX_SAFE_INTEGER;
}

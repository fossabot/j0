import {Array} from 'j0';
import j0arrayFrom from './j0';
if (!Array.from) {
	Array.from = j0arrayFrom;
}

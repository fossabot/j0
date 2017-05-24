import {Array} from 'j0';
import arrayFrom from '.';
if (!Array.from) {
	Array.from = arrayFrom;
}

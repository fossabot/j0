import {Array} from '../..';
import arrayFrom from '.';
if (!Array.from) {
	Array.from = arrayFrom;
}

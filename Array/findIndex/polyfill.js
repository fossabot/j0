import {Array} from 'j0';
import j0findIndex from './j0';
const {prototype} = Array;
if (!prototype.findIndex) {
	prototype.findIndex = j0findIndex;
}

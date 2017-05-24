import {Array} from 'j0';
import j0find from './j0';
const {prototype} = Array;
if (!prototype.find) {
	prototype.find = j0find;
}

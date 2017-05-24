import {Array} from 'j0';
import j0includes from './j0';
const {prototype} = Array;
if (!prototype.includes) {
	prototype.includes = j0includes;
}

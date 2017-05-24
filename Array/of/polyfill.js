import {Array} from 'j0';
import j0ArrayOf from './j0';
if (!Array.of) {
	Array.of = j0ArrayOf;
}

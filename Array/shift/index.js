import isUndefined from '../../isUndefined';
import {TypeError} from '../..';

function shift(arrayLike) {
	if (arrayLike.shift) {
		return arrayLike.shift();
	} else if (!isUndefined(arrayLike.length)) {
		const returnValue = arrayLike[0];
		const {length} = arrayLike;
		for (let i = 0; i < length; i += 1) {
			arrayLike[i] = arrayLike[i + 1];
		}
		delete arrayLike[length - 1];
		arrayLike.length = length - 1;
		return returnValue;
	}
	throw new TypeError('The object is not shift-able object');
}
export default shift;

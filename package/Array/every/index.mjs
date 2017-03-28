import noop from '../../noop';
import from from '../from';

function every(iterable, fn = noop, thisArg) {
	return from(iterable).every(fn, thisArg);
}

export default every;

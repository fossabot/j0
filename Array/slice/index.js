import from from '../from';

function slice(iterable, start, end) {
	return from(iterable).slice(start, end);
}

export default slice;

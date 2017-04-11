import from from '../from';

function join(iterable, separator = ',') {
	return from(iterable).join(separator);
}

export default join;

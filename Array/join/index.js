import arrayFrom from '../from';

function join(iterable, separator = ',') {
	return arrayFrom(iterable).join(separator);
}

export default join;

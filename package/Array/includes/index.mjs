import Array from '..';

function includes(iterable, searchElement, fromIndex) {
	return Array.from(iterable).includes(searchElement, fromIndex);
}

export default includes;

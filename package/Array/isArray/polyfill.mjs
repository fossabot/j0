import toString from '../../Object/toString';

function isArray(x) {
	return toString.call(x) === '[object Array]';
}

export default isArray;

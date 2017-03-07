const {isArray} = Array;

function isArrayAll(...args) {
	return args.every(isArray);
}

export default isArrayAll;

const {isArray: _isArray} = Array;

/**
 * @param  {...any}  args espressions to check its type
 * @return {Boolean} true or false
 */
function isArray(...args) {
	return args.every(_isArray);
}

export default isArray;

// Returns true if the argument is an array.
//
// Examples:
//
// ```javascript
// isArray(1, 2, 3); // -> false
// isArray([1], [2], [3]); // -> true
// ```

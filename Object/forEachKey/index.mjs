function forEachKey(obj, fn, thisArg) {
	for (const key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (fn.call(thisArg, obj[key], key, obj)) {
				return;
			}
		}
	}
}

export default forEachKey;

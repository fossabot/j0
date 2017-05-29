function assign(target, ...objects) {
	objects
	.forEach(function (obj) {
		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				target[key] = obj[key];
			}
		}
	});
}

export default assign;

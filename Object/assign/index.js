import forEachKey from '../forEachKey';
function assign(target, ...sources) {
	sources.forEach(function (source) {
		forEachKey(source, function (value, key) {
			target[key] = value;
		});
	});
	return target;
}
export default assign;

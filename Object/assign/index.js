import forEach from '../../Array/forEach';
import forEachKey from '../forEachKey';
function assign(target, ...sources) {
	forEach(sources, function (source) {
		forEachKey(source, function (value, key) {
			target[key] = value;
		});
	});
	return target;
}
export default assign;

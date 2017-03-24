import postMessage from '../postMessage';
import addEventListner from '../dom/addEventListener';
import window from '../window';

let immediateCount = 0;
const tasks = {};
const suffix = '_setImmediate';

function setImmediate(fn) {
	immediateCount += 1;
	postMessage(`${immediateCount}${suffix}`, '*');
	tasks[immediateCount] = fn;
	return immediateCount;
}

addEventListner(window, 'message', function (event) {
	const [key] = event.data.split(suffix);
	const fn = tasks[key];
	if (fn) {
		fn();
	}
	delete tasks[key];
});

export default setImmediate;

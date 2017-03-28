import postMessage from '../postMessage';
import addEventListner from '../dom/addEventListener';
import window from '../window';
import setTimeout from '../setTimeout';

if (!window.immediateId) {
	window.immediateId = 0;
}
window.immediateId += 1;
let setImmediateAvailable;
let firstImmediate = true;
let immediateCount = 0;
const tasks = {};
const suffix = `_setImmediate${window.immediateId}`;
const {setImmediate: setImmediateNative} = window;

function setImmediatePostMessage(fn) {
	if (firstImmediate) {
		firstImmediate = false;
		addEventListner(window, 'message', function (event) {
			const [key] = event.data.split(suffix);
			const task = tasks[key];
			if (task) {
				task();
			}
			delete tasks[key];
		});
	}
	immediateCount += 1;
	postMessage(`${immediateCount}${suffix}`, '*');
	tasks[immediateCount] = fn;
	return immediateCount;
}

function setImmediateTimeout(fn) {
	return setTimeout(fn);
}

function testImmediate(fn, onSuccess) {
	let value = 1;
	const expected = (1 + 1) * 2;
	fn(function () {
		value *= 2;
		if (value === expected) {
			onSuccess();
		}
	});
	value += 1;
}

setImmediateAvailable = setImmediateTimeout;
setTimeout(function () {
	if (postMessage) {
		testImmediate(setImmediatePostMessage, function () {
			if (setImmediateAvailable !== setImmediateNative) {
				setImmediateAvailable = setImmediatePostMessage;
			}
		});
	}
	if (setImmediateNative) {
		testImmediate(setImmediateNative, function () {
			setImmediateAvailable = setImmediateNative;
		});
	}
});


export default function (fn) {
	return setImmediateAvailable(fn);
}

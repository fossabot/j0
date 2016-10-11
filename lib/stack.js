var clearTimeout = require('./clearTimeout');
var setTimeout = require('./setTimeout');
var slice = require('./slice');
var unshift = require('./unshift');
var shift = require('./shift');
module.exports = function (limit) {
	var stack = [];
	var timer;
	var doTask = function () {
		var task;
		if (!timer) {
			task = shift(stack);
			if (task) {
				timer = setTimeout(function () {
					timer = null;
					task[0].apply(task[2], task[3]);
					doTask();
				}, task[1]);
			}
		}
	};
	var addTask = function (taskFn, delay, thisArg, args) {
		unshift(stack, [taskFn, delay, thisArg, args]);
		if (0 < limit) {
			stack = slice(stack, 0, limit);
		}
		doTask();
	};
	addTask.clear = function () {
		clearTimeout(timer);
		stack = [];
	};
	addTask.setLimit = function (newLimit) {
		limit = newLimit;
	};
	return addTask;
};

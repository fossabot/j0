var clearTimeout = require('./clearTimeout');
var setTimeout = require('./setTimeout');
var slice = require('./slice');
var unshift = require('./unshift');
var shift = require('./shift');
module.exports = function (limit) {
	var queue;
	var timer;
	var doTask = function () {
		var task;
		if (!timer) {
			task = shift(queue);
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
		unshift([taskFn, delay, thisArg, args]);
		if (0 < limit) {
			queue = slice(queue, 0, limit);
		}
		doTask();
	};
	addTask.clear = function () {
		clearTimeout(timer);
		queue = [];
	};
	addTask.setLimit = function (newLimit) {
		limit = newLimit;
	};
	return addTask;
};

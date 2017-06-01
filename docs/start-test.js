(function(){
'use strict';

mocha.run().once('end', function () {
	var result = 0 < this.stats.failures ? 'failed' : 'passed';
	document.title += '[' + result + ']';
	document.body.classList.add('done');
	var tests = document.querySelectorAll('.test');
	var testList = [];

	var _loop = function _loop(i) {
		var testElement = tests[i];
		testElement.querySelector('h2').textContent.replace(/^\s*\[\s*id\s*:\s*(.*?)\s*\]/, function (match, name) {
			testElement.setAttribute('data-graph', name);
			testList.push(testElement);
		});
	};

	for (var i = tests.length; i--;) {
		_loop(i);
	}
	var canvasList = document.querySelectorAll('.' + window.canvasTestClass);
	var list = [];
	for (var i = canvasList.length; i--;) {
		list[i] = canvasList[i];
	}
	for (var _i = list.length; _i--;) {
		var canvas = list[_i];
		var name = canvas.getAttribute('data-name');
		for (var j = testList.length; j--;) {
			var _testElement = testList[j];
			var graphName = _testElement.getAttribute('data-graph');
			if (graphName === name) {
				_testElement.appendChild(canvas);
			}
		}
	}
});
}())

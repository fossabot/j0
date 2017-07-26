import '../lib/*/test/index.js';
import {
	document,
	canvasTestClass
} from 'j0';

mocha.run()
.once('end', function () {
	const result = 0 < this.stats.failures ? 'failed' : 'passed';
	document.title += `[${result}]`;
	document.body.classList.add('done');
	const tests = document.querySelectorAll('.test');
	const testList = [];
	for (let {length: i} = tests; i--;) {
		const testElement = tests[i];
		testElement.querySelector('h2').textContent
		.replace(/^\s*\[\s*id\s*:\s*(.*?)\s*\]/, function (match, name) {
			testElement.setAttribute('data-graph', name);
			testList.push(testElement);
		});

	}
	const canvasList = document.querySelectorAll(`.${canvasTestClass}`);
	const list = [];
	for (let {length: i} = canvasList; i--;) {
		list[i] = canvasList[i];
	}
	for (let {length: i} = list; i--;) {
		const canvas = list[i];
		const name = canvas.getAttribute('data-name');
		for (let {length: j} = testList; j--;) {
			const testElement = testList[j];
			const graphName = testElement.getAttribute('data-graph');
			if (graphName === name) {
				testElement.appendChild(canvas);
			}
		}
	}
});

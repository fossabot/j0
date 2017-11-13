import {
	XMLHttpRequest,
	document,
	window,
	console,
} from 'j0';

function setVersion() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', `${window.root}/package.json`);
	xhr.onload = function () {
		const {version} = JSON.parse(xhr.response);
		const elements = document.querySelectorAll('.version');
		for (let {length: i} = elements; i--;) {
			elements[i].textContent = version;
		}
	};
	xhr.send();
}

function setAssert() {
	const {assert} = window.chai;
	assert.approxThreshold = 0.0000000000001;
	assert.approxEqual = (a, b, threshold = assert.approxThreshold) => {
		if (Math.abs(a - b) < threshold) {
			return;
		}
		throw new Error(`expected ${a} to be approximately equal to ${b}`);
	};
	window.assert = assert;
}

window.root = document.getElementById('root').textContent;
window.canvasTestClass = `Canvas${Date.now()}`;
window.mocha.setup('bdd');
setAssert();
setVersion();
before(function () {
	if (window.mocha.options.grep) {
		beforeEach(function () {
			this.test.ctx.debug = true;
			console.group(this.currentTest.title);
		});
		afterEach(function () {
			console.groupEnd(this.currentTest.title);
		});
	}
});

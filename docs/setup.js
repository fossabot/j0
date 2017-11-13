(function(){
'use strict';

var x = XMLHttpRequest;

var x$1 = document;

var x$2 = window;

var x$3 = console;

function setVersion() {
	var xhr = new x();
	xhr.open('GET', x$2.root + '/package.json');
	xhr.onload = function () {
		var _JSON$parse = JSON.parse(xhr.response),
		    version = _JSON$parse.version;

		var elements = x$1.querySelectorAll('.version');
		for (var i = elements.length; i--;) {
			elements[i].textContent = version;
		}
	};
	xhr.send();
}

function setAssert() {
	var assert = x$2.chai.assert;

	assert.approxThreshold = 0.0000000000001;
	assert.approxEqual = function (a, b) {
		var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : assert.approxThreshold;

		if (Math.abs(a - b) < threshold) {
			return;
		}
		throw new Error('expected ' + a + ' to be approximately equal to ' + b);
	};
	x$2.assert = assert;
}

x$2.root = x$1.getElementById('root').textContent;
x$2.canvasTestClass = 'Canvas' + Date.now();
x$2.mocha.setup('bdd');
setAssert();
setVersion();
before(function () {
	if (x$2.mocha.options.grep) {
		beforeEach(function () {
			this.test.ctx.debug = true;
			x$3.group(this.currentTest.title);
		});
		afterEach(function () {
			x$3.groupEnd(this.currentTest.title);
		});
	}
});
}());
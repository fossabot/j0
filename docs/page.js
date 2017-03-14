'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* global document, navigator */

function startMocha() {
	mocha.run().once('end', function () {
		document.body.classList.add(0 < this.stats.failures ? 'failed' : 'passed');
	});
}

function showEnvironment() {
	var environment = document.getElementById('environment');
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = Object.keys(navigator.constructor.prototype)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var propertyName = _step.value;

			var tr = document.createElement('tr');
			var th = document.createElement('th');
			var td = document.createElement('td');
			var value = navigator[propertyName];
			tr.appendChild(th).textContent = propertyName;
			tr.appendChild(td).textContent = value;
			environment.appendChild(tr).classList.add(typeof value === 'undefined' ? 'undefined' : _typeof(value));
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}
}

if (mocha) {
	startMocha();
}
showEnvironment();
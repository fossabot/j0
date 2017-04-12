'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	var INTERVAL = 100;

	var getBody = new Promise(function (resolve) {
		function get() {
			var _document = document,
			    body = _document.body;

			if (body) {
				resolve(body);
			} else {
				setTimeout(get, INTERVAL);
			}
		}
		get();
	});

	function onError(error) {
		onError.listener(error);
	}

	onError.listener = function (error) {
		console.error(error);
	};

	/* global chai */
	function startMocha() {
		mocha.run().once('end', function () {
			var className = 0 < this.stats.failures ? 'failed' : 'passed';
			document.body.classList.add('done');
			document.body.classList.add(className);
			document.title += '[' + className + ']';
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
		window.assert = chai.assert;
		mocha.setup('bdd');
		window.start = startMocha;
	}

	getBody.then(showEnvironment).catch(onError);
});

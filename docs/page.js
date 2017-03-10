'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* global document, navigator */

if (mocha) {
	mocha.run().once('end', function () {
		document.body.classList.add(0 < this.stats.failures ? 'failed' : 'passed');
	});
}

Object.keys(navigator.constructor.prototype).reduce(function (environment, propertyName) {
	var tr = document.createElement('tr');
	var th = document.createElement('th');
	var td = document.createElement('td');
	var value = navigator[propertyName];
	tr.classList.add(typeof value === 'undefined' ? 'undefined' : _typeof(value));
	th.textContent = propertyName;
	td.textContent = value;
	tr.appendChild(th);
	tr.appendChild(td);
	environment.appendChild(tr);
	return environment;
}, document.getElementById('environment'));
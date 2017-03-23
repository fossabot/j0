/* global document, navigator */
import '../package/polyfill';

function startMocha() {
	mocha.run().once('end', function () {
		document.body.classList.add(0 < this.stats.failures ? 'failed' : 'passed');
	});
}

function showEnvironment() {
	const environment = document.getElementById('environment');
	for (const propertyName of Object.keys(navigator.constructor.prototype)) {
		const tr = document.createElement('tr');
		const th = document.createElement('th');
		const td = document.createElement('td');
		const value = navigator[propertyName];
		tr.appendChild(th).textContent = propertyName;
		tr.appendChild(td).textContent = value;
		environment.appendChild(tr).classList.add(typeof value);
	}
}

if (mocha) {
	startMocha();
}
showEnvironment();

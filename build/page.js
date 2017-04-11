/* global chai */
import window from '../window';
import getBody from '../getBody';
import onError from '../onError';
import document from '../document';
import navigator from '../navigator';

function startMocha() {
	mocha.run()
		.once('end', function () {
			const className = 0 < this.stats.failures ? 'failed' : 'passed';
			document.body.classList.add('done');
			document.body.classList.add(className);
			document.title += `[${className}]`;
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
	window.assert = chai.assert;
	mocha.setup('bdd');
}

window.start = startMocha;
getBody
.then(function () {
	showEnvironment();
})
.catch(onError);

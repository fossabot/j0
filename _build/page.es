/* global document, navigator */
if (mocha) {
	mocha.run().once('end', function () {
		const stats = document.getElementById('mocha-stats');
		stats.removeChild(stats.firstChild);
		document.body.classList.add(0 < this.stats.failures ? 'failed' : 'passed');
	});
}

Object.keys(navigator.constructor.prototype).reduce(function (environment, propertyName) {
	const tr = document.createElement('tr');
	const th = document.createElement('th');
	const td = document.createElement('td');
	const value = navigator[propertyName];
	tr.classList.add(typeof value);
	th.textContent = propertyName;
	td.textContent = value;
	tr.appendChild(th);
	tr.appendChild(td);
	environment.appendChild(tr);
	return environment;
}, document.getElementById('environment'));

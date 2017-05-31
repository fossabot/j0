import {
	window,
	fetch,
	document,
	dom,
	console
} from 'j0';
dom.ready()
.then(async function () {
	const url = `${dom(document.getElementById('root')).text()}/package.json`;
	const response = await fetch(url);
	const {version} = await response.json();
	dom.findAll('.version')
	.forEach(function (element) {
		element.text(version);
	});
})
.catch(console.error);
window.assert = window.chai.assert;
window.mocha.setup('bdd');

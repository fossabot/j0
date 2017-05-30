import {
	window,
	fetch,
	document,
	dom,
	console
} from 'j0';
dom.ready()
.then(async function () {
	const response = await fetch(`${dom(document.getElementById('root')).text}/package.json`);
	const {version} = await response.json();
	dom.findAll('.version')
	.forEach(function (element) {
		element.text = version;
	});
})
.catch(console.error);
window.assert = window.chai.assert;
window.mocha.setup('bdd');

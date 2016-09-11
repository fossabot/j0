mocha.setup('bdd');
/* MODULES */
mocha.run().once('end', function () {
	document.body.setAttribute('class', 0 < this.stats.failures ? 'failed' : 'passed');
});

mocha.run()
.once('end', function () {
	const result = 0 < this.stats.failures ? 'failed' : 'passed';
	document.title += `[${result}]`;
	document.body.classList.add('done');
});

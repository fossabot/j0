(function(){
'use strict';

mocha.run().once('end', function () {
	var result = 0 < this.stats.failures ? 'failed' : 'passed';
	document.title += '[' + result + ']';
	document.body.classList.add('done');
});
}())

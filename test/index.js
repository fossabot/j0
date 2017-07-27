const $console = require('j1/console').create('test');
const setup = require('./setup');
const run = require('./run');
const onEnd = require('./onEnd');

Promise.resolve()
.then(setup)
.then(run)
.then(onEnd, onEnd)
.catch((error) => {
	$console.onError(error);
	process.exit(1);
});

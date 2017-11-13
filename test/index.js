const console = require('console');
const setup = require('./setup');
const run = require('./run');
const rollup = require('./rollup');
const onEnd = require('./onEnd');

Promise.resolve()
.then(rollup)
.then(setup)
.then(run)
.then(onEnd, onEnd)
.catch((error) => {
	console.onError(error);
	process.exit(1);
});

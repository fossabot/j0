const console = require('j1/console').create('compileUnicodeData');
const createIDNAMappingTable = require('./createIDNAMappingTable');
const compileUnicodeData = require('./compileUnicodeData');

async function compile() {
	await compileUnicodeData();
	await createIDNAMappingTable();
}

if (module.parent) {
	module.exports = compile;
} else {
	compile()
	.catch(console.onError);
}

const console = require('j1/console').create('compileUnicodeData');
const createIDNAMappingTable = require('./createIDNAMappingTable');

async function compile() {
	await createIDNAMappingTable();
}

if (module.parent) {
	module.exports = compile;
} else {
	compile()
	.catch(console.onError);
}

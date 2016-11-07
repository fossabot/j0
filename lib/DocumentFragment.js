var DF = DocumentFragment;
try {
	new DF();
} catch (error) {
	DF = null;
}
module.exports = DF;

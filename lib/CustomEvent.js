var Event = module.exports = CustomEvent;
if (Event) {
	// new CustomEvent fails on IE
	try {
		/* jshint -W031 */
		new Event('G');
	} catch (error) {
		module.exports = undefined;
	}
}

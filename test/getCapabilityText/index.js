const isString = require('j1/isString');

function getCapabilityText(capability) {
	const fields = [];
	for (const key of ['os', 'os_version', 'browserName', 'browser_version', 'resolution']) {
		const value = capability[key];
		if (isString(value)) {
			fields.push(value);
		}
	}
	return fields.join(',');
}

module.exports = getCapabilityText;

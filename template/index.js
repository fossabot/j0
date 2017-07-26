import {
	pluralFunctions,
	keys
} from 'j0';

let pluralFunction;

function template(templateString, params = {}) {
	return keys(params)
	.reduce(function (result, paramKey) {
		const value = params[paramKey];
		const matcher1 = new RegExp(`\\$\\{${paramKey}\\}`, 'g');
		const matcher2 = new RegExp(`\\$\\{${paramKey}\\s*:\\s*(.*?)\\}`, 'g');
		return result
		.replace(matcher2, function (match, body) {
			return body.trim().split(/\s*,\s*/)[pluralFunction(value)];
		})
		.replace(matcher1, value);
	}, templateString);
}

function setPluralForm(index = 0) {
	pluralFunction = pluralFunctions[index];
}

template.setPluralForm = setPluralForm;
setPluralForm();

export default template;

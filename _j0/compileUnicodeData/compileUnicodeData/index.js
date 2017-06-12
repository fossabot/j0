/* global Set */
/* eslint-disable no-magic-numbers, no-unused-vars */
const path = require('path');
const fs = require('fs');
const console = require('j1/console').create('compileUnicodeData');
const writeFile = require('j1/writeFile');
const promisify = require('j1/promisify');
const readFile = promisify(fs.readFile, fs);

function load() {
	return readFile(path.join(__dirname, '..', 'data', 'UnicodeData.txt'));
}

function hex(x) {
	return `0x${x.toString(16)}`;
}

async function compileUnicodeData() {
	const buffer = await load();
	const data = [];
	const generalCategories = new Set();
	const bidirectionalCategories = new Set();
	const characterDecompositionMappingTypes = new Set();
	buffer.toString()
	.split(/\n/)
	.filter((line) => {
		return !(/^\s*$/).test(line) && line.charAt(0) !== '#';
	})
	.forEach((line) => {
		const [
			codeValue,
			characterName,
			generalCategory,
			canonicalCombiningClasses,
			bidirectionalCategory,
			characterDecompositionMapping,
			decimalDigitValue,
			digitValue,
			numericValue,
			mirrored,
			unicode1Name,
			commentField,
			upperCaseMapping,
			lowerCaseMapping,
			titleCaseMapping
		] = line
		.replace(/\s*#.*/, '')
		.trim()
		.split(/\s*;\s*/);
		generalCategories.add(generalCategory);
		bidirectionalCategories.add(bidirectionalCategory);
		const mapping = [];
		if (characterDecompositionMapping) {
			const fragments = characterDecompositionMapping.split(/\s+/);
			let tag = fragments.shift();
			if (!(/<\w+>/).test(tag)) {
				fragments.unshift(tag);
				tag = '<canonical>';
			}
			tag = tag.slice(1, -1).toUpperCase();
			characterDecompositionMappingTypes.add(tag);
			mapping.push(
				tag,
				...fragments
				.map((value) => {
					return hex(parseInt(value, 16));
				})
			);
		}
		data[parseInt(codeValue, 16)] = [
			generalCategory,
			parseInt(canonicalCombiningClasses, 10),
			bidirectionalCategory,
			mapping.length ? mapping : 0
		];
	});
	const code = `/* eslint-disable max-lines */
import {
	Symbol
} from 'j0';
${
	[
		...generalCategories,
		...bidirectionalCategories,
		...characterDecompositionMappingTypes
	]
	.map((tag) => {
		return `export const ${tag} = Symbol('${tag}');`;
	})
	.join('\n')
}
export const UnicodeData = [
${
	data
	.map((charData) => {
		if (!charData) {
			return '';
		}
		const [
			generalCategory,
			canonicalCombiningClasses,
			bidirectionalCategory,
			characterDecompositionMapping
		] = charData;
		return `\t[${[
			generalCategory,
			canonicalCombiningClasses,
			bidirectionalCategory,
			characterDecompositionMapping ? `[${characterDecompositionMapping.join(', ')}]` : ''
		].join(', ')}]`;
	})
	.join(',\n')
}
];
`;
	await writeFile(path.join(__dirname, '..', '..', '..', 'Unicode', 'data', 'index.js'), code);
}

if (module.parent) {
	module.exports = compileUnicodeData;
} else {
	compileUnicodeData()
	.catch(console.onError);
}

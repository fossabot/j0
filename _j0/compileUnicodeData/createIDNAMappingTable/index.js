/* eslint-disable no-magic-numbers */
const path = require('path');
const fs = require('fs');
const console = require('j1/console');
const writeFile = require('j1/writeFile');
const promisify = require('j1/promisify');
const readFile = promisify(fs.readFile, fs);

function load() {
	return readFile(path.join(__dirname, '..', 'data', 'IdnaMappingTable.txt'));
}

function hexList(numbers) {
	return numbers
	.map((x) => {
		return `0x${x.toString(16)}`;
	})
	.join(', ');
}

async function createIDNAMappingTable() {
	const buffer = await load();
	const ranges = buffer.toString()
	.split(/\n/)
	.filter((line) => {
		return !(/^\s*$/).test(line) && line.charAt(0) !== '#';
	})
	.map((line) => {
		const [range, status, to] = line.replace(/\s*#.*/, '').split(';')
		.map((part) => {
			return part.trim();
		});
		const result = {
			range: range.split('..')
			.map((value) => {
				return parseInt(value, 16);
			}),
			status: status.toUpperCase(),
			id: [status, to].join('')
		};
		if (to) {
			result.to = to.split(/\s+/)
			.map((value) => {
				return parseInt(value, 16);
			});
		}
		return result;
	});
	for (let i = ranges.length; i--;) {
		const {range, id} = ranges[i];
		const {
			range: previousRange,
			id: previousId
		} = ranges[i - 1] || {};
		if (previousId === id && previousRange[previousRange.length - 1] + 1 === range[0]) {
			previousRange[1] = range[range.length - 1];
			ranges.splice(i, 1);
		}
	}
	const mileStones = [];
	for (let i = 0; i < ranges.length; i += 1000) {
		const subMileStones = [];
		for (let j = 0; j < 1000; j += 100) {
			const item = ranges[i + j];
			if (item) {
				subMileStones.push([i + j, item.range[0]]);
			}
		}
		mileStones.push([i, ranges[i].range[0], ...subMileStones]);
	}
	const code = `/* eslint-disable no-magic-numbers */
import {
	Symbol,
	Object
} from 'j0';
import {
	VALID,
	IGNORED,
	MAPPED,
	DEVIATION,
	DISALLOWED,
	DISALLOWED_STD3_VALID,
	DISALLOWED_STD3_MAPPED
} from '../statuses';
const map = [
${
	ranges
	.map(({range, status, to}) => {
		return `\t[[${hexList(range)}], ${status}${to ? `, ${hexList(to)}` : ''}]`;
	})
	.join(',\n')
}
];
Object.assign(map, {
	VALID,
	IGNORED,
	MAPPED,
	DEVIATION,
	DISALLOWED,
	DISALLOWED_STD3_VALID,
	DISALLOWED_STD3_MAPPED,
	shortcut: [
${
	mileStones
	.map((stone) => {
		return `\t\t${JSON.stringify(stone)}`;
	})
	.join(',\n')
}
	]
});
export default map;
`;
	await writeFile(path.join(__dirname, '..', '..', '..', 'Unicode', 'mappingTable', 'index.js'), code);
}

if (module.parent) {
	module.exports = createIDNAMappingTable;
} else {
	createIDNAMappingTable()
	.catch(console.onError);
}

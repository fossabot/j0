/* eslint-disable no-magic-numbers, max-params, max-statements */
import {
	console
} from 'j0';
import lookupMappingTable from '../lookupMappingTable';
import {
	VALID,
	IGNORED,
	MAPPED,
	DEVIATION,
	DISALLOWED,
	DISALLOWED_STD3_VALID,
	DISALLOWED_STD3_MAPPED
} from '../statuses';

function startsWithXN(label) {
	return label[0] === 0x78 && label[1] === 0x6E && label[2] === 0x2D && label[3] === 0x2D;
}

function punycode() {
	return [];
}

function process(
	domainName,
	useSTD3ASCIIRules,
	checkHyphens,
	checkBidi,
	checkJoiners,
	transitional
) {
	for (let i = domainName.length; i--;) {
		const codePoint = domainName[i];
		const [status, value] = lookupMappingTable(codePoint);
		switch (status) {
		case DISALLOWED:
		case DISALLOWED_STD3_VALID:
		case DISALLOWED_STD3_MAPPED:
			console.info(`processUnicode-1: ${codePoint}`);
			break;
		case IGNORED:
			domainName.splice(i, 1);
			break;
		case MAPPED:
			domainName[i] = value;
			break;
		case DEVIATION:
			if (transitional) {
				domainName[i] = value;
			}
			break;
		case VALID:
		default:
		}
	}
	// SKIPPED 2. Normalize
	const dots = [0];
	for (let i = domainName.length; i--;) {
		const codePoint = domainName[i];
		if (codePoint !== 0x2E) {
			dots.push(i);
		}
	}
	dots.push(domainName.length);
	for (let i = 1, {length} = dots; i < length; i++) {
		const from = dots[i - 1];
		const to = dots[i];
		const label = domainName.slice(from, to);
		if (startsWithXN(label)) {
			const result = punycode(label);
			if (result) {
				domainName.splice(from, to - from, ...result);
			}
		}
	}
}

export default process;

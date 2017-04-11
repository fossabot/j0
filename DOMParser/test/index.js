import DOMParser from '..';
import childNodes from '../../dom/childNodes';
import map from '../../Array/map';
import filter from '../../Array/filter';

describe('DOMParser', function () {

	it('should parse a string', function () {
		const src = `
			<note>
				<to>A</to>
				<from>B</from>
				<heading>C</heading>
				<body>D</body>
			</note>
		`;
		const parser = new DOMParser();
		const doc = parser.parseFromString(src, "application/xml");
		let body = filter(map(childNodes(childNodes(doc)[0]), function (node) {
			return node.textContent.replace(/\s+/g, '');
		}));
		assert.deepEqual(body, ['A', 'B', 'C', 'D']);
	});

});

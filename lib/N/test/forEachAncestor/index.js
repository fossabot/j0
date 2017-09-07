import {
	N,
	document,
} from 'j0';

describe('N.prototype.forEachAncestor', function () {

	it('should iterate ancestors', function () {
		const element1 = new N();
		const element2 = new N();
		const element3 = new N({c: [element1, element2]});
		const element4 = new N({c: [element3]});
		const results = [];
		element1.forEachAncestor((element) => {
			results.push(element);
		});
		const expected = [
			element1,
			element3,
			element4,
		];
		expected.forEach((element, index) => {
			assert(element.equals(results[index]), `Error at ${index}`);
		});
	});

	it('should iterate ancestors but skip the first element', function () {
		const element1 = new N();
		const element2 = new N();
		const element3 = new N({c: [element1, element2]});
		const element4 = new N({c: [element3]});
		const results = [];
		element1.forEachAncestor((element) => {
			results.push(element);
		}, 1);
		const expected = [
			element3,
			element4,
		];
		expected.forEach((element, index) => {
			assert(element.equals(results[index]), `Error at ${index}`);
		});
	});

	it('should iterate ancestors but skip the document', function () {
		const element1 = new N();
		const element2 = new N();
		const element3 = new N({c: [element1, element2]});
		const element4 = new N({c: [element3]});
		element4.setParent(document.body);
		const results = [];
		element1.forEachAncestor((element) => {
			results.push(element);
		}, 1);
		const expected = [
			element3,
			element4,
			new N(document.body),
		];
		expected.forEach((element, index) => {
			assert(element.equals(results[index]), `Error at ${index}`);
		});
		element4.remove();
	});

});

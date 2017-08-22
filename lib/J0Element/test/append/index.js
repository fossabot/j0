import {
	dom
} from 'j0';

describe('J0Element.prototype.append', function () {

	it('should append nodes', function () {
		const element1 = dom(`${Date.now()}-1`);
		const element2 = dom();
		const element3 = dom(`${Date.now()}-2`);
		const element = dom({
			c: [
				element1
			]
		});
		element.append(element2, element3);
		const expected = [
			element1,
			element2,
			element3
		];
		element.childNodes
		.forEach((element, index) => {
			assert.equal(element.equals(expected[index]), true);
		});
	});

	it('should skip null or false or undefined', function () {
		const element1 = dom(`${Date.now()}-1`);
		const element2 = dom();
		const element3 = dom(`${Date.now()}-2`);
		const element = dom({
			c: [
				element1
			]
		});
		element.append(0, element2, null, element3);
		const expected = [
			element1,
			element2,
			element3
		];
		element.childNodes
		.forEach((element, index) => {
			assert.equal(element.equals(expected[index]), true);
		});
	});

});

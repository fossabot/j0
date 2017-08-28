import {
	dom
} from 'j0';

describe('J0Element.prototype.focused', function () {

	it('should return true if it is focused', async function () {
		const body = await dom.ready();
		const element = dom({
			t: 'input'
		});
		body.append(element);
		element.node.focus();
		assert.equal(element.focused, true);
		element.remove();
	});

	it('should return true if it is not focused', async function () {
		const body = await dom.ready();
		const element = dom({
			t: 'input'
		});
		body.append(element);
		element.node.blur();
		assert.equal(element.focused, false);
		element.remove();
	});

});

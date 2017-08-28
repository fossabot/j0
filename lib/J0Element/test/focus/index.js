import {
	dom,
	wait,
} from 'j0';

describe('J0Element.prototype.focused', function () {

	it('should return true if it is focused', async function () {
		const body = await dom.ready();
		const element = dom({
			t: 'input'
		});
		body.append(element);
		await wait(50);
		element.node.focus();
		element.node.click();
		await wait(50);
		assert.equal(element.focused, true);
		element.remove();
	});

	it('should return true if it is not focused', async function () {
		const body = await dom.ready();
		const element = dom({
			t: 'input'
		});
		body.append(element);
		await wait(50);
		element.node.blur();
		await wait(50);
		assert.equal(element.focused, false);
		element.remove();
	});

});

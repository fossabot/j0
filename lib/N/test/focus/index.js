import {
	N,
	Promise,
	document,
	setTimeout,
} from 'j0';

describe('N.prototype.focused', function () {

	it('should return true if it is focused', async function () {
		const body = await new N.ready();
		const element = new N({
			t: 'input',
			a: [
				['type', 'text']
			]
		});
		body.append(element);
		await new Promise((resolve, reject) => {
			let count = 0;
			function check() {
				element.node.click();
				element.node.focus();
				if (element.equals(document.activeElement)) {
					resolve();
				} else if (count++ < 20) {
					setTimeout(check, 100);
				} else {
					reject(new Error('Failed to focus an element'));
				}
			}
			check();
		});
		assert.equal(element.focused, true);
		element.remove();
	});

	it('should return true if it is not focused', async function () {
		const body = await N.ready();
		const element = new N({
			t: 'input'
		});
		body.append(element);
		assert.equal(element.focused, false);
		element.remove();
	});

});

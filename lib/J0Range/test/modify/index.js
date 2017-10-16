import {
	J0Range,
	wait,
	console,
	JSON,
} from 'j0';
import checkRange from '../checkRange';

function test_modify(textDirectionType, visualDirections) {

	describe(`[${textDirectionType}] J0Range.prototype.modify`, function () {

		visualDirections
		.forEach(([visualDirection, textDirection]) => {

			switch (textDirection) {
			case 'mainF':
				it(`[${textDirectionType}] should move forward along to main axis and hit the end`, function () {
					const range = new J0Range(null, this.element);
					range.set(this.firstTextNode, 0);
					for (const textNode of this.textNodes) {
						const index = this.textNodes.indexOf(textNode);
						for (let i = 0; i < textNode.length; i++) {
							checkRange.prefix = `[${index}-${i}]`;
							range.modify('move', visualDirection);
							checkRange(range, textNode, i + 1);
						}
						range.modify('move', visualDirection);
					}
					assert.deepEqual(this.events, ['range:last']);
				});
				it(`[${textDirectionType}] should extend forward along to main axis and hit the end`, function () {
					const range = new J0Range(null, this.element);
					range.set(this.firstTextNode, 0);
					for (const textNode of this.textNodes) {
						const index = this.textNodes.indexOf(textNode);
						for (let i = 0; i < textNode.length; i++) {
							checkRange.prefix = `[${index}-${i}]`;
							range.modify('extend', visualDirection);
							checkRange(range, this.firstTextNode, 0, textNode, i + 1);
						}
						range.modify('extend', visualDirection);
					}
					assert.deepEqual(this.events, ['range:last']);
				});
				break;
			case 'mainB':
				it(`[${textDirectionType}] should move backward along to main axis`, function () {
					const range = new J0Range(null, this.element);
					range.set(this.lastTextNode, this.lastTextNode.length);
					for (const textNode of this.textNodes.slice().reverse()) {
						const index = this.textNodes.indexOf(textNode);
						for (let i = 0; i < textNode.length; i++) {
							checkRange.prefix = `[${index}-${i}]`;
							range.modify('move', visualDirection);
							checkRange(range, textNode, textNode.length - (i + 1));
						}
						range.modify('move', visualDirection);
					}
					assert.deepEqual(this.events, ['range:first']);
				});
				it(`[${textDirectionType}] should extend backward along to main axis`, function () {
					const range = new J0Range(null, this.element);
					range.set(this.lastTextNode, this.lastTextNode.length);
					for (const textNode of this.textNodes.slice().reverse()) {
						const index = this.textNodes.indexOf(textNode);
						for (let i = 0; i < textNode.length; i++) {
							checkRange.prefix = `[${index}-${i}]`;
							range.modify('extend', visualDirection);
							checkRange(range, textNode, textNode.length - (i + 1), this.lastTextNode, this.lastTextNode.length);
						}
						range.modify('extend', visualDirection);
					}
					assert.deepEqual(this.events, ['range:first']);
				});
				break;
			case 'crossF':
				it(`[${textDirectionType}] should move forward along to cross axis [start of lines]`, async function () {
					const range = new J0Range(null, this.element);
					range.set(this.firstTextNode, 0);
					// if (this.debug) {
					// 	this.timeout(8000);
					// 	range.apply();
					// 	await wait(800);
					// }
					for (const textNode of this.textNodes.slice(1)) {
						const index = this.textNodes.indexOf(textNode);
						checkRange.prefix = `[${index}]`;
						range.modify('move', visualDirection);
						// if (this.debug) {
						// 	range.apply();
						// 	await wait(800);
						// }
						checkRange(range, textNode, 0);
					}
					assert.deepEqual(this.events, []);
					range.modify('move', visualDirection);
					range.modify('move', visualDirection);
					assert.deepEqual(this.events, ['range:lastline', 'range:lastline']);
				});
				it(`[${textDirectionType}] should move forward along to cross axis [middle of lines]`, async function () {
					const range = new J0Range(null, this.element);
					range.set(this.firstTextNode, 1);
					// if (this.debug) {
					// 	this.timeout(8000);
					// 	range.apply();
					// 	await wait(800);
					// }
					for (const textNode of this.textNodes.slice(1)) {
						const index = this.textNodes.indexOf(textNode);
						checkRange.prefix = `[${index}]`;
						range.modify('move', visualDirection);
						if (this.debug) {
							console.log(`-------- ${checkRange.prefix} ${JSON.stringify(range.startContainer.textContent)} ${range.startOffset}`);
							// range.apply();
							// await wait(800);
						}
						checkRange(
							range,
							textNode,
							index === 3
							? 1
							: (value) => {
								return 1 <= value;
							}
						);
					}
					assert.deepEqual(this.events, []);
					range.modify('move', visualDirection);
					range.modify('move', visualDirection);
					assert.deepEqual(this.events, ['range:lastline', 'range:lastline']);
				});
				it(`[${textDirectionType}] should move forward along to cross axis [end of lines]`, function () {
					const range = new J0Range(null, this.element);
					range.set(this.textNodes[1], this.textNodes[1].textContent.trim().length);
					range.modify('move', visualDirection);
					checkRange(range, this.textNodes[2], this.textNodes[2].textContent.trim().length);
				});
				break;
			case 'crossB':
				it(`[${textDirectionType}] should move backward along to cross axis [start of lines]`, async function () {
					const range = new J0Range(null, this.element);
					range.set(this.lastTextNode, 0);
					// if (this.debug) {
					// 	this.element.node.focus();
					// 	this.timeout(8000);
					// 	range.apply();
					// 	await wait(800);
					// }
					for (const textNode of this.textNodes.slice(0, -1).reverse()) {
						const index = this.textNodes.indexOf(textNode);
						checkRange.prefix = `[${index}]`;
						console.log(checkRange.prefix);
						range.modify('move', visualDirection);
						// if (this.debug) {
						// 	range.apply();
						// 	await wait(800);
						// }
						checkRange(range, textNode, 0);
					}
					console.log('event test');
					assert.deepEqual(this.events, []);
					range.modify('move', visualDirection);
					range.modify('move', visualDirection);
					assert.deepEqual(this.events, ['range:firstline', 'range:firstline']);
				});
				it(`[${textDirectionType}] should move backward along to cross axis [middle of lines]`, async function () {
					const range = new J0Range(null, this.element);
					range.set(this.lastTextNode, 1);
					// if (this.debug) {
					// 	this.timeout(8000);
					// 	range.apply();
					// 	await wait(800);
					// }
					for (const textNode of this.textNodes.slice(0, -1).reverse()) {
						const index = this.textNodes.indexOf(textNode);
						checkRange.prefix = `[${index}]`;
						range.modify('move', visualDirection);
						if (this.debug) {
							console.log(`-------- ${checkRange.prefix} ${JSON.stringify(range.startContainer.textContent)} ${range.startOffset}`);
							// range.apply();
							// await wait(800);
						}
						checkRange(
							range,
							textNode,
							index === 3
							? 1
							: (value) => {
								return 1 <= value;
							}
						);
					}
					assert.deepEqual(this.events, []);
					range.modify('move', visualDirection);
					range.modify('move', visualDirection);
					assert.deepEqual(this.events, ['range:firstline', 'range:firstline']);
				});
				it(`[${textDirectionType}] should move backward along to cross axis [end of lines]`, function () {
					const range = new J0Range(null, this.element);
					range.set(this.lastTextNode, this.lastTextNode.textContent.trim().length);
					range.modify('move', visualDirection);
					checkRange(range, this.textNodes[4], this.textNodes[4].textContent.trim().length);
				});
				break;
			}

		});

	});

}

export default test_modify;

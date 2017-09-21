import {
	N,
	document,
} from 'j0';

describe('N.prototype.addClass', function () {

	it('should add a class', function () {
		const class1 = `_${Date.now()}-1`;
		const class2 = `_${Date.now()}-2`;
		const element = new N({
			a: [
				['class', class1]
			]
		});
		assert.deepEqual(
			element.getAttribute('class').split(/\s+/),
			[
				class1
			]
		);
		element.addClass(class2);
		assert.deepEqual(
			element.getAttribute('class').split(/\s+/),
			[
				class1,
				class2
			]
		);
	});

	it('should add 2 classes', function () {
		const class1 = `_${Date.now()}-1`;
		const class2 = `_${Date.now()}-2`;
		const class3 = `_${Date.now()}-3`;
		const element = new N({
			a: [
				['class', class1]
			]
		});
		assert.deepEqual(
			element.getAttribute('class').split(/\s+/),
			[
				class1
			]
		);
		element.addClass(class2, class3);
		assert.deepEqual(
			element.getAttribute('class').split(/\s+/),
			[
				class1,
				class2,
				class3
			]
		);
	});

});

describe('N.prototype.removeClass', function () {

	it('should remove a class', function () {
		const class1 = `_${Date.now()}-1`;
		const class2 = `_${Date.now()}-2`;
		const element = new N({
			a: [
				['class', `${class1} ${class2}`]
			]
		});
		assert.deepEqual(
			element.getAttribute('class').split(/\s+/),
			[
				class1,
				class2
			]
		);
		element.removeClass(class2);
		assert.deepEqual(
			element.getAttribute('class').split(/\s+/),
			[
				class1
			]
		);
	});

	it('should remove 2 classes', function () {
		const class1 = `_${Date.now()}-1`;
		const class2 = `_${Date.now()}-2`;
		const class3 = `_${Date.now()}-3`;
		const element = new N({
			a: [
				['class', `${class1} ${class2} ${class3}`]
			]
		});
		assert.deepEqual(
			element.getAttribute('class').split(/\s+/),
			[
				class1, class2, class3
			]
		);
		element.removeClass(class2, class3);
		assert.deepEqual(
			element.getAttribute('class').split(/\s+/),
			[
				class1
			]
		);
	});

});

describe('N.prototype.toggleClass', function () {

	it('should toggle a class', function () {
		const class1 = `_${Date.now()}-1`;
		const class2 = `_${Date.now()}-2`;
		const element = new N({
			a: [
				['class', `${class1} ${class2}`]
			]
		});
		assert.deepEqual(
			element.getAttribute('class').split(/\s+/),
			[
				class1,
				class2
			]
		);
		element.toggleClass(class2);
		assert.deepEqual(
			element.getAttribute('class').split(/\s+/),
			[
				class1
			]
		);
		element.toggleClass(class2);
		assert.deepEqual(
			element.getAttribute('class').split(/\s+/),
			[
				class1,
				class2
			]
		);
	});

	it('should toggle 2 classes', function () {
		const class1 = `_${Date.now()}-1`;
		const class2 = `_${Date.now()}-2`;
		const class3 = `_${Date.now()}-3`;
		const element = new N({
			a: [
				['class', `${class1} ${class2}`]
			]
		});
		assert.deepEqual(
			element.getAttribute('class').split(/\s+/),
			[
				class1,
				class2
			]
		);
		element.toggleClass(class2, class3);
		assert.deepEqual(
			element.getAttribute('class').split(/\s+/),
			[
				class1,
				class3
			]
		);
		element.toggleClass(class2, class3);
		assert.deepEqual(
			element.getAttribute('class').split(/\s+/),
			[
				class1,
				class2
			]
		);
	});

});

describe('N.prototype.hasClass', function () {

	it('should check a class', function () {
		const class1 = `_${Date.now()}-1`;
		const class2 = `_${Date.now()}-2`;
		const element = new N({
			a: [
				['class', class1]
			]
		});
		assert.equal(element.hasClass(class1), true);
		assert.equal(element.hasClass(class2), false);
	});

	it('should check 2 classes', function () {
		const class1 = `_${Date.now()}-1`;
		const class2 = `_${Date.now()}-2`;
		const class3 = `_${Date.now()}-3`;
		const element = new N({
			a: [
				['class', class1, class2]
			]
		});
		assert.equal(element.hasClass(class1), true);
		assert.equal(element.hasClass(class1, class2), true);
		assert.equal(element.hasClass(class1, class3), false);
	});

	it('should check nodes which has no classList', function () {
		const element = new N(document);
		assert.equal(element.hasClass(), true);
		assert.equal(element.hasClass(`_${Date.now()}`), false);
	});

});

import isChildClassOf from '..';

describe('isChildClassOf', function () {

	it('should return true if the first class inherits the second', function () {
		class Parent {}
		class Child extends Parent {}
		assert.equal(isChildClassOf(Child, Parent), true);
	});

	it('should return false if the first class doesn\'t inherit the second', function () {
		class Parent {}
		class Child {}
		assert.equal(isChildClassOf(Child, Parent), false);
	});

});

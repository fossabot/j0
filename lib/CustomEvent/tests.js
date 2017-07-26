function test(CustomEvent, name = 'CustomEvent') {

	describe(name, function () {

		it('should create an event', function () {
			const type = `${Date.now()}`;
			const event = new CustomEvent(type);
			assert.equal(event.type, type);
		});

	});

}

export default test;

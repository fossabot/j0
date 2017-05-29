import State from '..';

const hex = 16;

describe('State', function () {

	it('should have a name', function () {
		const name = `${Date.now()}`;
		const definition = name;
		const state = new State(name, definition);
		assert.equal(state.name, name);
	});

	it('should have onEnter', function () {
		const name = `${Date.now()}`;
		const definition = name;
		function onEnter(params) {
			return params;
		}
		const state = new State(name, definition, onEnter);
		assert.equal(state.onEnter, onEnter);
	});

	it('should return href', function () {
		const name = `${Date.now()}`;
		const definition = `${name}/{param1:\\d+}/{param2:\\w+}`;
		function onEnter(params) {
			return params;
		}
		const state = new State(name, definition, onEnter);
		const param1 = `${Date.now()}`;
		const param2 = `${Date.now().toString(hex)}`;
		const expected = `${name}/${param1}/${param2}`;
		assert.equal(state.href({
			param1,
			param2
		}), expected);
	});

	it('should return an empty string when href() receives invalid parameters', function () {
		const name = `${Date.now()}`;
		const definition = `${name}/{param1:\\d+}/{param2:\\w+}`;
		function onEnter(params) {
			return params;
		}
		const state = new State(name, definition, onEnter);
		const param1 = `${Date.now()}a`;
		const param2 = `${Date.now().toString(hex)}`;
		const expected = '';
		assert.equal(state.href({
			param1,
			param2
		}), expected);
	});

	it('should return an empty string when href() doesn\'t receive parameters', function () {
		const name = `${Date.now()}`;
		const definition = `${name}/{param1:\\d+}/{param2:\\w+}`;
		function onEnter(params) {
			return params;
		}
		const state = new State(name, definition, onEnter);
		const expected = '';
		assert.equal(state.href(), expected);
	});

	it('should clone a state', function () {
		const name = `${Date.now()}`;
		const definition = `${name}/{param1:\\d+}/{param2:\\w+}`;
		function onEnter(params) {
			return params;
		}
		const state = new State(name, definition, onEnter);
		const state2 = new State(state);
		const param1 = `${Date.now()}`;
		const param2 = `${Date.now().toString(hex)}`;
		const expected = `${name}/${param1}/${param2}`;
		assert.equal(state2.name, name);
		assert.equal(state2.onEnter, onEnter);
		assert.equal(state2.href({
			param1,
			param2
		}), expected);
	});

	it('should parse href patterns', function () {
		const name = `${Date.now()}`;
		const definition = `${name}/{param1:\\d+}/{param2:\\w+}`;
		function onEnter(params) {
			return params;
		}
		const state = new State(name, definition, onEnter);
		const param1 = `${Date.now()}`;
		const param2 = `${Date.now().toString(hex)}`;
		const params = {
			param1,
			param2
		};
		assert.deepEqual(state.parse(state.href(params)), params);
	});

});

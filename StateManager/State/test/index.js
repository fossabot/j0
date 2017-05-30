import State from '..';

const hex = 16;

describe('State', function () {

	it('should return href', function () {
		const path = '/{param1:\\d+}/{param2:\\w+}';
		const state = new State({path});
		const param1 = `${Date.now()}`;
		const param2 = `${Date.now().toString(hex)}`;
		const expected = `/${param1}/${param2}`;
		assert.equal(state.href({
			param1,
			param2
		}), expected);
	});

	it('should return an empty string when href() receives invalid parameters', function () {
		const path = '/{param1:\\d+}/{param2:\\w+}';
		const state = new State({path});
		const param1 = `${Date.now()}a`;
		const param2 = `${Date.now().toString(hex)}`;
		const expected = '';
		assert.equal(state.href({
			param1,
			param2
		}), expected);
	});

	it('should return an empty string when href() doesn\'t receive parameters', function () {
		const path = '/{param1:\\d+}/{param2:\\w+}';
		const state = new State({path});
		const expected = '';
		assert.equal(state.href(), expected);
	});

	it('should clone a state', function () {
		const path = '/{param1:\\d+}/{param2:\\w+}';
		const state = new State({path});
		const state2 = new State(state);
		const param1 = `${Date.now()}`;
		const param2 = `${Date.now().toString(hex)}`;
		const expected = `${name}/${param1}/${param2}`;
		assert.equal(state !== state2, true);
		assert.equal(state2.href({
			param1,
			param2
		}), expected);
	});

	it('should parse href patterns', function () {
		const path = '/{param1:\\d+}/{param2:\\w+}';
		const state = new State({path});
		const param1 = `${Date.now()}`;
		const param2 = `${Date.now().toString(hex)}`;
		const params = {
			param1,
			param2
		};
		assert.deepEqual(state.parse(state.href(params)), params);
	});

	it('should instantiate a state', function () {
		const path = '/{param1:\\d+}/{param2:\\w+}';
		const state = new State({path});
		const param1 = `${Date.now()}`;
		const param2 = `${Date.now().toString(hex)}`;
		const params = {
			param1,
			param2
		};
		const instantiated = state.instantiate(params);
		assert.equal(instantiated !== state, true);
		assert.equal(instantiated.href, state.href(params));
		assert.deepEqual(instantiated.params, params);
	});

});

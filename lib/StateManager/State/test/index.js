import State from '../index.js';

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
		const expected = `/${param1}/${param2}`;
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

	it('should return nothing if given href has extra prefix', function () {
		const path = '/{param1:\\d+}/{param2:\\d+}';
		const state = new State({path});
		const param1 = `${Date.now()}`;
		const param2 = `${Date.now() + 1000}`;
		const params = {
			param1,
			param2
		};
		assert.equal(state.parse(`_${state.href(params)}`), null);
	});

	it('should return nothing if given href has extra suffix', function () {
		const path = '/{param1:\\d+}/{param2:\\d+}';
		const state = new State({path});
		const param1 = `${Date.now()}`;
		const param2 = `${Date.now() + 1000}`;
		const params = {
			param1,
			param2
		};
		assert.equal(state.parse(`${state.href(params)}_`), null);
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
		const instance = state.instantiate(params);
		assert.equal(instance !== state, true);
		assert.equal(instance.href, state.href(params));
		assert.deepEqual(instance.params, params);
	});

	it('should return the two states are same or not', function () {
		const path = '/{param1:\\d+}';
		const state = new State({path});
		const param1 = `${Date.now()}`;
		const param2 = `${param1}${param1}`;
		const instance1 = state.instantiate({param1});
		const instance2 = state.instantiate({param1});
		const instance3 = state.instantiate({param1: param2});
		assert.equal(instance1 === instance2, false);
		assert.equal(instance1.is(instance2), true);
		assert.equal(instance1.is(instance3), false);
		assert.equal(instance2.is(instance1), true);
		assert.equal(instance2.is(instance3), false);
		assert.equal(instance3.is(instance1), false);
		assert.equal(instance3.is(instance2), false);
	});

	it('should return a state is a descendant of another state or not', function () {
		const path1 = '/{param1:\\d+}';
		const path2 = '/{param1:\\d+}/{param2:\\w+}';
		const state1 = new State({path: path1});
		const state2 = new State({path: path2});
		const param1 = `${Date.now()}`;
		const param2 = `${Date.now().toString(hex)}`;
		const instance1 = state1.instantiate({param1});
		const instance2 = state2.instantiate({
			param1,
			param2
		});
		assert.equal(instance1.isIn(instance2), false);
		assert.equal(instance1.isAncestorOf(instance2), true);
		assert.equal(instance2.isIn(instance1), true);
		assert.equal(instance2.isAncestorOf(instance1), false);
	});

});

import '../*/test';
import StateManager from '..';

const hex = 16;
const initialState = location.pathname;

function resetState() {
	history.replaceState(null, {}, initialState);
}

describe('StateManager', function () {

	before(resetState);
	after(resetState);
	beforeEach(resetState);
	afterEach(resetState);

	it('should define a state', function () {
		const prefix = `prefix${Date.now()}/`;
		const states = new StateManager({prefix});
		const name1 = `${Date.now()}-1`;
		const name2 = `${Date.now()}-2`;
		states
		.define({
			name: name1,
			path: 'stateA/{param1:\\d+}'
		})
		.define({
			name: name2,
			path: 'stateB/{param1:\\d+}/{param2:\\w+}'
		});
		const results = [];
		for (const [, state] of states.states) {
			results.push(state);
		}
		if (results[0].name === name2) {
			results.reverse();
		}
		assert.equal(results[0].name, name1);
		assert.equal(results[1].name, name2);
	});

	it('should get a href', function () {
		const prefix = `prefix${Date.now()}/`;
		const states = new StateManager({prefix});
		const name1 = `${Date.now()}-1`;
		const name2 = `${Date.now()}-2`;
		states
		.define({
			name: name1,
			path: 'stateA/{param1:\\d+}'
		})
		.define({
			name: name2,
			path: 'stateB/{param1:\\d+}/{param2:\\w+}'
		});
		const param1 = `${Date.now()}`;
		const param2 = Date.now().toString(hex);
		const expected = `${prefix}stateB/${param1}/${param2}`;
		assert.equal(states.href({
			name: name2,
			params: {
				param1,
				param2
			}
		}), expected);
	});

	it('should define fallback and return it when href() receives invalid parameters', function () {
		const prefix = `prefix${Date.now()}/`;
		const states = new StateManager({prefix});
		const name0 = `${Date.now()}-defaultState`;
		const name1 = `${Date.now()}-1`;
		const name2 = `${Date.now()}-2`;
		states
		.define({
			name: name0,
			path: name0
		})
		.define({
			name: name1,
			path: 'stateA/{param1:\\d+}'
		})
		.define({
			name: name2,
			path: 'stateB/{param1:\\d+}/{param2:\\w+}'
		})
		.otherwise({name: name0});
		const param1 = `${Date.now()}`;
		assert.equal(states.href({
			name: name2,
			params: {param1}
		}), `${prefix}${name0}`);
		assert.equal(states.href({name: name2}), `${prefix}${name0}`);
	});

	it('should start management', async function () {
		const states = new StateManager();
		const name0 = `${Date.now()}-defaultState`;
		const name1 = `${Date.now()}-1`;
		const name2 = `${Date.now()}-2`;
		states
		.define({
			name: name0,
			path: name0
		})
		.define({
			name: name1,
			path: 'stateA/{param1:\\d+}'
		})
		.define({
			name: name2,
			path: 'stateB/{param1:\\d+}/{param2:\\w+}'
		})
		.otherwise({name: name0});
		const [toState, fromState] = await new Promise(function (resolve) {
			states
			.on('change', function (...data) {
				resolve(data);
			})
			.start();
		});
		assert.deepEqual(toState, states.fallback);
		assert.equal(!fromState, true);
	});

});

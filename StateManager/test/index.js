import '../*/test';
import StateManager from '..';

const hex = 16;

describe('StateManager', function () {

	it('should define a state', function () {
		const states = new StateManager();
		const name1 = `${Date.now()}-1`;
		const name2 = `${Date.now()}-2`;
		states
		.define(name1, 'stateA/{param1:\\d+}')
		.define(name2, 'stateB/{param1:\\d+}/{param2:\\w+}');
		const results = [];
		for (const [, state] of states.states) {
			results.push(state);
		}
		results.sort(({nameA}, {nameB}) => {
			return nameA < nameB ? 1 : -1;
		});
		assert.equal(results[0].name, name1);
		assert.equal(results[1].name, name2);
	});

	it('should get a href', function () {
		const states = new StateManager();
		const name1 = `${Date.now()}-1`;
		const name2 = `${Date.now()}-2`;
		states
		.define(name1, 'stateA/{param1:\\d+}')
		.define(name2, 'stateB/{param1:\\d+}/{param2:\\w+}');
		const param1 = `${Date.now()}`;
		const param2 = Date.now().toString(hex);
		const expected = `stateB/${param1}/${param2}`;
		assert.equal(states.href(name2, {
			param1,
			param2
		}), expected);
	});

	it('should define fallback and return it when href() receives invalid parameters', function () {
		const states = new StateManager();
		const name0 = `${Date.now()}-0`;
		const name1 = `${Date.now()}-1`;
		const name2 = `${Date.now()}-2`;
		states
		.define(name0, name0)
		.define(name1, 'stateA/{param1:\\d+}')
		.define(name2, 'stateB/{param1:\\d+}/{param2:\\w+}')
		.otherwise(name0);
		const param1 = `${Date.now()}`;
		assert.equal(states.href(name2, {param1}), name0);
		assert.equal(states.href(name2), name0);
	});

});

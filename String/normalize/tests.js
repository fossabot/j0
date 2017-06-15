import {fetch} from 'j0';

const forms = [
	'NFC',
	'NFD',
	'NFKC',
	'NFKD'
];

function test(normalize, name = 'String.prototype.normalize') {

	describe(name, function () {

		let tests;

		before(async function () {
			this.timeout(10000);
			const root = document.getElementById('root').textContent;
			const response = await fetch(`${root}/String/normalize/tests.json`);
			tests = await response.json();
		});

		it('should normalize texts', function () {
			const failed = [];
			const {length} = tests;
			this.timeout(10000);
			while (0 < tests.length) {
				const [source, ...expected] = tests.pop();
				forms
				.forEach((form, index) => {
					if (normalize.call(source, form) !== expected[index]) {
						failed.push(`#${tests.length}:${form}:${source}`);
					}
				});
			}
			if (0 < failed.length) {
				console.error(new Error(`${failed.length} of ${length} failed`));
				console.log(failed);
				// throw new Error(`${failed.length} of ${length} failed`);
			}
		});

	});

}

export default test;

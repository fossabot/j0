import StringList from '../../StringList';
import forEachKey from '../../Object/forEachKey';
import push from '../../Array/push';
import toLowerCase from '../../String/toLowerCase';

class Headers extends StringList {

	constructor(headers) {
		const init = [];
		if (headers) {
			forEachKey(headers, function (value, key) {
				push(init, [key, value]);
			});
		}
		super(init);
	}

	indexOf(name) {
		return super.indexOf(toLowerCase(name));
	}

	has(name) {
		return super.has(toLowerCase(name));
	}

	append(name, value) {
		return super.append(toLowerCase(name), value);
	}

	set(name, value) {
		return super.set(toLowerCase(name), value);
	}

	delete(name) {
		return super.delete(toLowerCase(name));
	}

	get(name) {
		return super.getAll(toLowerCase(name)).join(',');
	}

	entries() {
		const iterator = super.entries();
		const history = [];
		return {
			next: () => {
				while (1) {
					const {
						value,
						done
					} = iterator.next();
					const key = value && value[0];
					if (done || history.indexOf(key) < 0) {
						push(history, key);
						return {
							value: [key, this.get(key)],
							done
						};
					}
				}
			}
		};
	}

}

export default Headers;

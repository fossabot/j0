import {Error} from 'j0';

class Storage {

	get removeItem() {
		return (key) => {
			if (key === 'removeItem') {
				throw new Error('Cannot remove "removeItem"');
			}
			delete this[key];
		};
	}

}

export default Storage;

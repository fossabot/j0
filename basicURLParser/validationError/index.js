import {console} from 'j0';

function validationError(...args) {
	console.info(`ValidationError:${args.join(':')}`);
}

export default validationError;

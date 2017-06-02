import {console} from 'j0';

function validationError(step, params) {
	console.info(`ValidationError:${step}:${params}`);
}

export default validationError;

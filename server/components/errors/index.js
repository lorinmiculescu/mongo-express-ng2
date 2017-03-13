/**
 * Error responses
 */

'use strict';

let errors = [];

errors[404] = function pageNotFound (req, res) {
	res.status(404).send('Not Found !!!');
}

export default errors;
'use strict';

import express = require("express");

let router = express.Router();

router.get('/', (request: express.Request, response: express.Response) => {
    let testData = {
        firstName: "The",
        lastName: "Burge"
    }

    response.send(testData);
});


export default router;
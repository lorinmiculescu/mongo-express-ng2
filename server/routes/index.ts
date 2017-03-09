'use strict';

import * as express from 'express';

import api from './api/api';

let routes = function (app: express.Application) {

    app.use("/api", api);

};

export default routes;


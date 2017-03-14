'use strict';

import * as express from 'express';
import * as path from "path";
import errors from "../components/errors";

import thing from './api/thing';

let routes = function (app: express.Application) {

    app.use("/api/things", thing);

    app.use(express.static(path.join(__dirname, '../../client')));
    
    //app.route('*').get(errors[404]);
    
    // 404 error will be handled client-side
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/index.html'));
    });
    

};

export default routes;
'use strict';

import * as express from "express";
import * as path from "path";
import * as http from "http";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

import config from "./config";
import routes from "./routes";

class App {

	public express: express.Application;

	constructor() {

		this.express = express();
		this.middleware();
		this.db();
		this.routes();
		this.seed();

	}

	private middleware(): void {

		this.express.use(bodyParser.json());
		this.express.use(bodyParser.urlencoded({ extended: false }));

	}

	private db(): void {
		mongoose.connect(config.mongo.uri, config.mongo.options);
		mongoose.connection.on('error', function (err) {
			console.error(`MongoDB connection error: ${err}`);
			process.exit(-1);
		});
	}

	private seed(): void {
		if (config.seedDB) { require ("./config/seed"); };
	}

	private routes(): void {
		routes(this.express);
	}

}

export default new App().express;
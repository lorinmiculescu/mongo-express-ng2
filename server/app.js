'use strict';

// Set default node environment to development
let env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Get dependencies
import * as express from "express";
import * as path from "path";
import * as http from "http";
import * as bodyParser from "body-parser";
import { config } from "./config";
import * as mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// Populate database with dummy data
if (config.seedDB) { require('./config/seed'); };

// Get our API routes
const api = require('./api/api');
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../client')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));

// Expose app
exports = module.exports = app;
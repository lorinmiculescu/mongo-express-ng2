'use strict';

import * as http from 'http';
import App from './app';

const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const port: number = process.env.PORT || 3000;

const server: any = http.createServer(App);
server.listen(port, () => console.log(`Listening at http://localhost:${port}`));
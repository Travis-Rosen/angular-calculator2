/*
-Travis Rosen
-7/09/2022
-app.js
-Server file
*/

/*
* Require statements
*/
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

/*
* API Routes
*/
const CalculatorApi = require('./routes/calculator-api')

/**
 * App configs
 */
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist/calculator-app')));
app.use('/', express.static(path.join(__dirname, '../dist/calculator-app')));
//Server port
const port = 3000;

/**
 * Database connection
 */
//Database connection string
const conn = 'mongodb+srv://tmrosen:tmrosen@bcrs01.m3xib.mongodb.net/BCRS01?retryWrites=true&w=majority';

mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true
}). then(() => {
  console.debug(`Connection to the database instance was successful`);
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`)
});

/**
 * APIs
 */
app.use('/api/calculator', CalculatorApi);

/**
 * Create & Start Server
 */
 http.createServer(app).listen(port, function() {
  console.log(`Application started and listening on port: ${port}`)
});




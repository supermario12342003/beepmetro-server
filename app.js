/*
* @Author: Mengwei Choong
* @Date:   2018-01-27 10:32:55
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-02-02 12:41:10
*/

// server.js
const express = require('express');
const app = express();
const dist = __dirname + "/public";

app.use(express.static(dist));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// set up the RESTful API, handler methods are defined in api.js
app.use('/api', require('./routes'));

// route to frontend, put after all the routes
app.get('*', (req, res) => res
  .sendFile(__dirname + "/public/index.html"));

function clientErrorHandler (err, req, res, next) {
	console.error(err)
  res.status(500).send({ error: 'Something failed!' });
  next(err);
}

app.use(clientErrorHandler)
app.use(require('./middlewares/auth').getUser)

module.exports = app
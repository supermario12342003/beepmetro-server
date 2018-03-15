/*
* @Author: Mengwei Choong
* @Date:   2018-01-27 10:32:55
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-03-15 14:12:07
*/

// server.js
const express = require('express');
const i18n = require("i18n");
const app = express();
const dist = __dirname + "/public";
const config = require("./config.js");
const cookieParser = require('cookie-parser');

app.use(express.static(dist));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// set up the RESTful API, handler methods are defined in api.js

i18n.configure(config.i18nConfig);
app.use(i18n.init);

//*** middlewares start here
app.use(require('./middlewares/auth').getUser)


//*** routings start here
app.use('/api', require('./routes'));

// route to frontend, put after all the routes
app.get('*', (req, res) => res
	.sendFile(__dirname + "/public/index.html"));

function clientErrorHandler (err, req, res, next) {
	console.error(err)
	res.status(500).send({ error: res.__n("%s cat", "%s cats", 1)});
	next(err);
}

app.use(clientErrorHandler)

module.exports = app
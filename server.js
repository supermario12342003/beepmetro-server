/*
* @Author: Mengwei Choong
* @Date:   2018-01-27 10:32:55
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-01-29 14:48:12
*/

// server.js
const express = require('express');
const dist = __dirname + "/public";
const app = express();
const server = app.listen(process.env.PORT || 8080, () => {
  console.log("server listening... " + server.address().port);
});

var mongoose = require('mongoose');
if (process.env.NODE_ENV == "development") 
	var mongodbUrl = "mongodb://localhost/beepmetro"
else
	var mongodbUrl = "mongodb://mchoong:Mario171731(@ds119736.mlab.com:19736/beepmetro"
mongoose.connect(mongodbUrl)
	.then(
	() => console.log("db connected"),
	err => console.log("db failed to connected", err)

);

app.use(express.static(dist));
app.use(express.urlencoded({extended: true}));

// set up the RESTful API, handler methods are defined in api.js
app.use('/api', require('./controllers'));

// route to frontend, put after all the routes
app.get('*', (req, res) => res
  .sendFile(__dirname + "/public/index.html"));

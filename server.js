/*
* @Author: Mengwei Choong
* @Date:   2018-01-27 10:32:55
* @Last Modified by:   Mengwei Choong
<<<<<<< HEAD
* @Last Modified time: 2018-01-28 11:54:57
=======
* @Last Modified time: 2018-01-29 13:38:27
>>>>>>> e28dd2107fd18d785c54a38356056ccbde2294a4
*/

// server.js
const express = require('express');
const dist = __dirname + "/public";
const app = express();
const server = app.listen(process.env.PORT || 8080, () => {
  console.log("server listening... " + server.address().port);
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/' + process.env.DB || "local")
	.then(
	() => console.log("db connected"),
	err => console.log("db failed to connected")
);

app.use(express.static(dist));
app.use(express.urlencoded({extended: true}));

// set up the RESTful API, handler methods are defined in api.js
app.use('/api', require('./controllers'));

// route to frontend, put after all the routes
app.get('*', (req, res) => res
  .sendFile(__dirname + "/public/index.html"));

/*
* @Author: Mengwei Choong
* @Date:   2018-01-31 17:09:07
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-03-16 12:54:38
*/

require('dotenv').config();
var app = require('./app');

var mongoose = require('mongoose');
if (process.env.NODE_ENV == "development") 
	var mongodbUrl = "mongodb://localhost/beepmetro"
else
	var mongodbUrl = "mongodb://localhost/beepmetro-dev"
mongoose.connect(mongodbUrl)

const server = app.listen(process.env.PORT || 8080, () => {
  console.log("server listening... " + server.address().port);
});
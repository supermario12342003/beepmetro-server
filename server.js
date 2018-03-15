/*
* @Author: Mengwei Choong
* @Date:   2018-01-31 17:09:07
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-03-15 17:03:02
*/

var app = require('./app')

var mongoose = require('mongoose');
if (process.env.NODE_ENV == "development") 
	var mongodbUrl = "mongodb://localhost/beepmetro"
else
	var mongodbUrl = "mongodb://mchoong:Mario171731(@ds119736.mlab.com:19736/beepmetro"
mongoose.connect(mongodbUrl)

const server = app.listen(process.env.PORT || 8080, () => {
  console.log("server listening... " + server.address().port);
});

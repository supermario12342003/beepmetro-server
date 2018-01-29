/*
* @Author: Mengwei Choong
* @Date:   2018-01-29 11:27:31
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-01-29 11:33:22
*/

// The User model

var mongoose = require('mongoose')
   ,Schema = mongoose.Schema;

var userSchema = new Schema({
    firstName: String,
    lastName: String,
});

module.exports = mongoose.model('User', userSchema);
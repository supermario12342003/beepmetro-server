/*
* @Author: Mengwei Choong
* @Date:   2018-01-29 13:28:57
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-01-29 13:31:11
*/

var express = require('express');
var router = express.Router();

router.use("/user", require('./user'));

module.exports = router
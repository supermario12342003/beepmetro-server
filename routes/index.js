/*
* @Author: Mengwei Choong
* @Date:   2018-01-29 13:28:57
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-02-03 14:32:03
*/

var express = require('express');
var auth = require('../middlewares/auth')
var router = express.Router();

router.use(auth.getUser);
router.use("/user", require('./user'));

module.exports = router
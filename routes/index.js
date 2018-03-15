/*
* @Author: Mengwei Choong
* @Date:   2018-01-29 13:28:57
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-03-15 14:29:46
*/

var express = require('express');
var auth = require('../middlewares/auth')
var router = express.Router();

router.use(auth.getUser);
router.use("/user", require('./user'));

router.get('/testLang', (req, res, next) => {
	res.send(res.__("hello world"));
});

module.exports = router
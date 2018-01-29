/*
* @Author: Mengwei Choong
* @Date:   2018-01-29 11:29:08
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-01-29 13:42:22
*/

var User = require('../models/user.js');
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	User.find((err, users) => {
		res.send(users);
	});
});

router.post('/', (req, res) => {
	new User({firstName: req.body.firstName, lastName: req.body.lastName})
	.save()
	.then(user => {
		
		res.send(user);
	});
});

router.get('/:userId', (req, res) =>{
	User.findById({_id: req.params.userId})
	.then(user => {
		res.send(user);
	});
});

module.exports = router;
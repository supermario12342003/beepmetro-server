/*
* @Author: Mengwei Choong
* @Date:   2018-01-29 11:29:08
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-02-04 01:55:51
*/

var User = require('../models/user.js');
var express = require('express');
var router = express.Router();

var auth = require('../middlewares/auth')

//list
router.get('/', (req, res, next) => {
	User.find()
	.then((users) => {
		res.send(users)
	})
	.catch((err) => next(err))
})

//create
router.post('/', (req, res, next) => {
	var user = new User();
	user.setData(req.body, req.isAdmin)
	.then((ret) => {
		res.send(ret)
	})
	.catch(next)	
});

router.post('/authenticate', (req, res, next) => {
	if (!req.body.email || !req.body.password) {
		res.send({
			success: false,
			message: "Email and password are required.",
		})
	}
	User.authenticate(req.body.email, req.body.password)
	.then((user) => {
		if (user) {
			res.send({
				success: true,
				token: user.getToken()
			})
		}
		else {
			res.send({
				success:false,
				message: "Invalid email or password."
			})	
		}
	})
	.catch(next)
});

router.post('/me', (req, res, next) => {
	if (req.userId) {
		User.findOne({_id: req.userId})
		.then(user =>{
			if (user) 
				res.send({success: true, obj:user})
			else
				res.send({success: false, message:"Cannot find this user."})
		})
		.catch(next)
	}
	else {
		res.status(401).send({success:false, message: "Token required."})
	}
});

//return success true when user is found and removed, else success false
router.delete('/:userId', (req, res, next) => {
	User.findOne({_id:req.params.userId})
	.then(user => {
		if (user) {
			user.remove();
			res.send({success: true});
		}
		else 
			res.send({success: false});	
	})
	.catch(next)
});

router.put('/:userId', [auth.isAuthenticated], (req, res) =>{
	User.findOne({_id: req.params.userId})
	.then(user => {
		if (!user) {
			res.status(404).send({success:false, message:"User not found"});
		}
		else
			if (req.userId == user._id || req.isAdmin) {
				user.setData(req.body, req.isAdmin)
				.then((ret) => {
					res.send(ret)
				})
				.catch((err) => next(err))
			}
		});
});

router.get('/:userId', [auth.isAuthenticated], (req, res) =>{
	User.findOne({_id: req.params.userId})
	.then(user => {
		if (!user) 
			res.status(404).send({success:false, message:"User not found."});
		else {
			if (req.userId == user._id || req.isAdmin) {
				res.send(user.getData(req.isAdmin));
			}
			else {
				res.status(401).send({success:false, message:"You have no access right."});
			}
		}
	});
});

module.exports = router;
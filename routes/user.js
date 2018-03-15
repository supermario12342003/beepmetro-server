/*
* @Author: Mengwei Choong
* @Date:   2018-01-29 11:29:08
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-03-15 14:15:17
*/

var User = require('../models/user.js');
var Base = require('../models/base.js')
var express = require('express');
var router = express.Router();

var auth = require('../middlewares/auth')

//list
//list should always give a start, limit and sorting criteria
router.get('/', (req, res, next) => {
	var fieldSet = req.isAdmin ? "adminFields" : "anonFields"
	Base.getPaginatedList(User, req.query)
	.then((users) => {
		var ret = [];
		users.forEach((user)=> {
			ret.push(user.toJSON({fieldSet:fieldSet}));
		});
		res.send(ret);
	})
	.catch((err) => next(err))
})

//create
router.post('/', (req, res, next) => {

	var user = new User();
	var fieldSet = req.isAdmin ? "adminFields" : "userFields"
	user.setData(req.body, fieldSet)
	.then((ret) => {
		res.send(ret)
	})
	.catch(next)	
});

//return success true when user is found and removed, else success false
router.delete('/:userId', [auth.isOwnerUser], (req, res, next) => {
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

router.put('/:userId', [auth.isOwnerUser], (req, res, next) => {
	User.findOne({_id: req.params.userId})
	.then(user => {
		if (!user) {
			res.status(404).send({success:false, message: res.__mf("$$User not found.")});
		}
		else {
			var fieldSet = req.isAdmin ? "adminFields" : "userFields"
			user.setData(req.body, fieldSet)
			.then((ret) => {
				res.send(ret)
			})
			.catch(next)
		}
	})
	.catch(next)
});

router.get('/:userId', [auth.isAuthenticated], (req, res) =>{
	User.findOne({_id: req.params.userId})
	.exec(err, user => {
		if (!user) 
			res.status(404).send({success:false, message:res.__mf("$$User not found.")});
		else {
			var fieldSet = req.isAdmin ? "adminFields" : "userFields"
			res.send(user.toJSON({
				fieldSet: fieldSet,
			}));
		}
	});
});

router.post('/authenticate', (req, res, next) => {
	if (!req.body.email || !req.body.password) {
		res.send({
			success: false,
			message: res.__mf("$$Email and password are required."),
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
				message: res.__mf("$$Invalid email or password."),
			})	
		}
	})
	.catch(next)
});

router.post('/me', [auth.isAuthenticated],(req, res, next) => {
	User.findOne({_id: req.userId})
	.then(user =>{
		if (user) {
			res.send({
				success: true,
				obj:user.toJSON({
					fieldSet:"userFields"
				})
			})
		}
		else
			res.send({success: false, message: res.__mf("$$User not found.")})
	})
	.catch(next)
});

module.exports = router;
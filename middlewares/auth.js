
var jwt = require('jsonwebtoken');

var getUser = function (req, res, next) {
	var token = req.body.token || req.query.token || req.headers['x-access-token'];
	req.userId = null
	req.isAdmin = false
	if (token) {
		try {
			var data = jwt.verify(token, process.env.secret || "secrets")
			// if everything is good, save to request for use in other routes
			req.userId = data._id; 
			req.isAdmin = data.isAdmin   
			req.hasRight = false
		}
		catch (err) {}
	}
	// invalid token
	next()
}


var isAuthenticated = function (req, res, next) {
	if (req.hasRight || req.isAdmin) {
		next()
	}
	else if (req.userId) {
		req.hasRight = true
		next()
	}
	else {
		res.status(403).send({
			success: false,
			message: 'Token is expired or invalid.'
		});    
		next('route');
	}
}

var isOwnerUser = function(req, res, next) {
	if (req.hasRight || req.isAdmin) {
		next()
	}
	else if (req.params.userId && req.params.userId === req.userId) {
		req.hasRight = true
		next()
	}
	else {
		res.status(403).send({
			success: false,
			message: 'You need to be the owner of this user.'
		});    
		next('route');
	}
}

var isAdmin = function (req, res, next) {
	if (req.hasRight || req.isAdmin) {
		next()
	}
	else {
		res.status(403).send({ 
			success: false,
			message: 'Not admin' 
		});
		next('route');
	}
}


module.exports = {isAdmin, isAuthenticated, isOwnerUser, getUser}
/*
* @Author: Mengwei Choong
* @Date:   2018-01-29 11:27:31
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-02-25 13:47:32
*/

// The User model

var Schema = require('mongoose').Schema;
var bcrypt = require('bcrypt');
var Base = require('./base');
var jwt = require('jsonwebtoken');
var User;

var userSchema = new Schema({
	email: {
		type: String,
		unique: [true, "Email already exists."],
		required: [true, "Email is required."],
		trim: true,
	},
	password: {
		type: String,
		required: [true, "Password is required."],
		minlength: [6, "Password must be at least 6 characters."],
	},
	firstName: {
		type: String,
		required: [true, "First name is required."],
		trim:true,
	},
	lastName: {
		type: String,
		required: [true, "Last name is required."],
		trim:true,
	},
	emailVerified: {
		type: Boolean,
		default: false,
		requireAdmin: true
	},

	isAdmin: {
		type: Boolean,
		default: false,
		requireAdmin: true,
	}
});

userSchema.userFields = {
	"read" : ["email", "password", "firstName", "lastName", "emailVerified"],
	"write" : ["email", "password", "firstName", "lastName"],
}

userSchema.pre('validate', function(next) {
	if (!/\d/.test(this.password))
		this.invalidate('password', 'Password must contain at least one number')
	if (!/[A-Za-z]+/.test(this.password))
		this.invalidate('password', 'Password must contain at least one alphabet')
	next();
})

//hashing a password before saving it to the database
userSchema.pre('save', function (next) {
	var user = this;
	user.validate()
	.then(() => {
		//check user.password is hashed
		if (user._original && user._original.password !== user.password) {
			bcrypt.hash(user.password, 10, (err, hash) => {
				if (err) next(err);
				user.password = hash;
				user.passwordConf = hash;
				next();
			})
		}
		else
			next()
	})
	.catch(next)
})

userSchema.methods.getToken = function() {
	var token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, process.env.secret || "secrets")
	return token
}

//return Promise, resolve return user if success
userSchema.statics.authenticate = function (email, password) {
	var schema = this;
	return new Promise(function(resolve, reject) {
		schema.findOne({ email: email })
		.then((user) => {
			if (!user) {
				resolve()
			}
			else {
				bcrypt.compare(password, user.password)
				.then((success) => {
					if (success)
						resolve(user)
					else
						resolve()
				})
				.catch(reject)
			}
		})
		.catch(reject)
	})
}


userSchema.plugin(require('mongoose-unique-validator'), { message: 'Error, expected {PATH} to be unique.' });
module.exports = User = Base.discriminator('User', userSchema)


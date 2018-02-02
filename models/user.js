/*
* @Author: Mengwei Choong
* @Date:   2018-01-29 11:27:31
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-02-02 17:47:39
*/

// The User model

var Schema = require('mongoose').Schema;
var bcrypt = require('bcrypt');
var Base = require('./base');

var userSchema = new Schema({
	email: {
		type: String,
		unique: [true, "Email already exists."],
		required: [true, "Email is required."],
		trim: true,
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
	password: {
		type: String,
		required: [true, "Password is required."],
		minlength: [6, "Password must be at least 6 Characters"],
	},
	isAdmin: {
		type: Boolean,
		default: false,
		requireAdmin: true,
	}
});

userSchema.virtual('passwordConf')
.get(() => {
	return this._passwordConf;
})
.set((value) => {
	this._passwordConf = value;
});

userSchema.methods.validatePassword = function() {
	if (!/\d/.test(this.password))
		return this.invalidate('password', 'Password must contain at least one number')
	if (!/[A-Za-z]+/.test(this.password))
		return this.invalidate('password', 'Password must contain at least one alphabet')
}


userSchema.pre('validate', function(next) {
	if (this.password !== this.passwordConf) {
		this.invalidate('passwordConf', 'Passwords are not the same');
	}
	this.validatePassword()
	next();
})

//hashing a password before saving it to the database
userSchema.pre('save', function (next) {
	var user = this;
	user.validate()
	.then(() => {
		bcrypt.hash(user.password, 10, (err, hash) => {
			if (err) next(err);
			user.password = hash;
			user.passwordConf = hash;
			next();
		})
	})
	.catch((err) => {
		next(err);
	})
})

userSchema.methods.getToken = function() {
	var token = jwt.sign({_id: this._id, isAdmin: this.isAdmin}, "secrets")
	return token
}

//return Promise, resolve return user if success
userSchema.statics.authenticate = function (email, password) {
	return new Promise(function(resolve, reject) {
		User.findOne({ email: email })
		.exec()
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
			}
		})
	})
}

//return Promise, resolve return {_id: , isAdmin: } if success
userSchema.statics.verifyToken = function (token) {
	return jwt.verify(token, 'secrets')
}

userSchema.plugin(require('mongoose-unique-validator'), { message: 'Error, expected {PATH} to be unique.' });

module.exports = Base.discriminator('User', userSchema)



/*
* @Author: Mengwei Choong
* @Date:   2018-01-29 20:03:37
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-02-02 18:19:39
*/
var mongoose = require('mongoose');

var baseSchema = new mongoose.Schema({
	createdDate: {
		type: Date,
		default: Date.now,
		requireAdmin: true,
	},
	modifiedDate: {
		type: Date,
		default: Date.now,
		requireAdmin: true,
	},
});

baseSchema.methods.setData = function(data, isAdmin=false) {
	var user = this
	for (key in data) {
		var field = this.schema.tree[key]
		if (field) {
			if (!field.requireAdmin || isAdmin)
				user[key] = data[key]
		}
		//maybe virtual
		else
			user[key] = data[key]
	}
}

baseSchema.methods.validateAndSave = function() {
	return new Promise((resolve, reject) => {
		this.save()
		.then((obj) => {
			if (obj) {
				resolve({success:true, obj:obj})
			}
			else
				resolve({success:false, errors:{}})
		})
		.catch((err) => {
			//if it's not form errors
			if (!err.errors)
				reject(err);
			else {
				var errors = {}
				for (key in err.errors) {
					errors[key] = err.errors[key].message
				}
				resolve({success:false, errors:errors})
			}
		})
	})
}

baseSchema.methods.getData = function(isAdmin=false) {
	var ret = {}
	var data = this.toJSON()
	for (key in data) {
		var field = this.schema.tree[key]
		if (field && (!field.requireAdmin || isAdmin)) {
			ret[key] = data[key]
		}
	}
	return ret
}

module.exports = mongoose.model('Base', baseSchema);;
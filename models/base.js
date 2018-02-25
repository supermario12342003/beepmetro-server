/*
* @Author: Mengwei Choong
* @Date:   2018-01-29 20:03:37
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-02-04 03:19:38
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
var userRights= {
	write: [],
	read: ["createdDate", "modifiedDate"],
	add: function(rights) {
		rights.write.forEach((w) => this.write.push(w))
		rights.read.forEach((r) => this.read.push(r))
	}
}

//try save, if fails, then simply errors and return, {success, obj/errors}
baseSchema.methods.validateAndSave = function(isAdmin=false) {
	var model = this;
	return new Promise((resolve, reject) => {
		model.save()
		.then((obj) => {
			if (obj) {
				resolve({success:true, obj:obj.getData(isAdmin)})
			}
			// resolve with validation errors
			else
				resolve({success:false, errors:{}})
		})
		.catch((err) => {
			//if it's not form errors
			if (!err.errors)
				reject(err);
			// resolve with unique and maybe other errors
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

baseSchema.methods.setField = function(field, data, accessRight) {
	var writableFields = this.getWritableFields(accessRight)
	if (field in writableFields) {
		this[field] = data
		return true
	}
	return false
}

//setData update the data then validate then save, if param save is false, it return nothing
baseSchema.methods.setFields = function(data, accessRight, save=true) {
	this._original = {}
	for (key in this.schema.tree)
		this._original[key] = model[key]
	for (key in data) {
		this.setField(key, data[key], accessRight)
	}
	if (save)
		return model.validateAndSave(isAdmin)
}

//setData update the data then validate then save, if param save is false, it return nothing
baseSchema.methods.setData = function(data, isAdmin=false, save=true) {
	var model = this
	model._original = {}
	for (key in this.schema.tree)
		model._original[key] = model[key]
	for (key in data) {
		var field = this.schema.tree[key]
		if (field) {
			if (!field.requireAdmin || isAdmin) {
				model[key] = data[key]
			}
		}
		//maybe virtual
		else
			model[key] = data[key]
	}
	if (save)
		return model.validateAndSave(isAdmin)
}

baseSchema.methods.getData = function(isAdmin=false) {
	var ret = {}
	var data = this.toJSON()
	for (key in data) {
		var field = this.schema.tree[key]
		if (!field.requireAdmin || isAdmin) {
			ret[key] = data[key]
		}
	}
	return ret
}

baseSchema.pre('save', function (next) {
	if (!this._original) {
		//TODO throw error so that dev should always use setData
		throw "You should use setData to update an object"
	}
	this.modifiedDate = Date.now()
	next()
})

module.exports = mongoose.model('Base', baseSchema);;
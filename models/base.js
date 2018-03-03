/*
* @Author: Mengwei Choong
* @Date:   2018-01-29 20:03:37
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-02-25 14:08:50
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

//try save, if fails, then simply errors and return, {success, obj/errors}
baseSchema.methods._validateAndSave = function(fieldSetArray) {
	var model = this;
	return new Promise((resolve, reject) => {
		model.save()
		.then((obj) => {
			if (obj) {
				resolve({success:true, obj:obj.getData(fieldSetArray)})
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

baseSchema.methods._getFieldSetArray= function(fieldSet="adminFields") {
	var model = this
	var fieldSetArray = model.schema[fieldSet]

	if (typeof(fieldSetArray) === "undefined") {
		var fields = []
		for (key in model.schema.tree) {
			fields.push(key)
		}
		var fieldSetArray = {
			"read": fields,
			"write": fields
		}
	}
	else {
		if (typeof(fieldSetArray["read"]) === "undefined") {
			fieldSetArray.read = []
		}
		if (typeof(fieldSetArray["write"]) === "undefined") {
			fieldSetArray.write = fieldSetArray["read"]
		}
	}

	return fieldSetArray
}

//setData update the data then validate then save, if param save is false, it return nothing
baseSchema.methods.setData = function(data, fieldSet="adminFields", save=true) {
	var model = this
	model._original = {}
	var fieldSetArray = model._getFieldSetArray(fieldSet)
	for (index in fieldSetArray.write) {
		var field = fieldSetArray.write[index]
		model._original[field] = model[field]

		if (typeof(data[field]) != "undefined") {
			model[field] = data[field]
		}
	}
	if (save)
		return model._validateAndSave(fieldSetArray)
}

baseSchema.methods.getData = function(fieldSetArray) {
	var ret = {}
	var data = this.toJSON()
	for (index in fieldSetArray.read) {
		var field = fieldSetArray.read[index]
		if (typeof(data[field]) != "undefined") {
			ret[field] = data[field]
		}
	}
	ret["_id"] = this._id
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
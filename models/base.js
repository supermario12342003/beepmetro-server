/*
* @Author: Mengwei Choong
* @Date:   2018-01-29 20:03:37
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-03-15 14:03:37
*/
var mongoose = require('mongoose');
var i18n = require('i18n');

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
				resolve({
					success:true,
					obj:obj.toJSON({fieldSetArray:fieldSetArray})
				})
			}
			// resolve with validation errors
			else
				resolve({success:false, errors:{}})
		})
		.catch((err) => {
			//if it's not form errors
			if (!err.errors) {
				reject(err);
			}
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
		if (fieldSet == "adminFields") {
			fieldSetArray = {
				"read": Object.keys(model.schema.tree),
				"write": Object.keys(model.schema.tree),
			}
		}
		else {
			fieldSetArray = {
				"read": [],
				"write": []
			}
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

baseSchema.pre('save', function (next) {
	if (!this._original) {
		//TODO throw error so that dev should always use setData
		throw i18n.__("You should use setData to update an object")
	}
	this.modifiedDate = Date.now()
	next()
})

if (!baseSchema.options.toObject) baseSchema.options.toObject = {};
if (!baseSchema.options.toJSON) baseSchema.options.toJSON = {};
baseSchema.options.toObject.transform = function (doc, ret, options) {
	var new_ret = {}
	if (typeof(options.fieldSetArray) === "undefined")
		options.fieldSetArray = doc._getFieldSetArray(options.fieldSet)
	options.fieldSetArray.read.forEach(function (prop) {
		new_ret[prop] = ret[prop]
	});
	new_ret["_id"] = ret._id
	return new_ret;
}

baseSchema.options.toJSON.transform = baseSchema.options.toObject.transform;

baseSchema.statics.getPaginatedList = function(model, data, options={}) {
	var start = parseInt(data['paginationStart'])
	var limit = parseInt(data['paginationLimit'])
	var sort = data["paginationSort"]
	
	if (isNaN(start))
		start = 0
	if (isNaN(limit))
		limit = 100
	if (!("paginationSort" in data))
		sort = "createdDate"
	
	return model.find(options)
	.skip(start)
	.limit(limit)
	.sort(sort)
}

var Base = mongoose.model('Base', baseSchema);

module.exports = Base
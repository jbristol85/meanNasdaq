var mongoose = require('mongoose');

var searchSchema = new mongoose.Schema({
	savedSearchId: {
		type: String,
		required: true
	},
	savedSearchSymbol: {
		type: String,
		required: true
	},
	createdOn:{
		type: Date,
		"default": Date.now
	}
});


var savedSchema = new mongoose.Schema({
		savedId: {
		type: String
	},
		savedSymbol:{
			type: String
		},
		createdOn:{
		type: Date,
		"default": Date.now
		}
});


var userSchema = new mongoose.Schema({
	username:{
		type: String,
		unique: true,
		required: true
	},
	name: {
		type: String
	},
	password:{
		type:String,
		required: true
	},
	searches: [searchSchema],
	saved: [savedSchema]
});

mongoose.model('User', userSchema);
var mongoose = require('mongoose');

	var commentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	createdOn:{
		type: Date,
		"default": Date.now
	}
});
	var stockSchema = new mongoose.Schema({
		Symbol: {
			type: String,
			required: true
		},
		Name: {
			type: String,
			required: true
		},
		LastSale: {
			type: Number
		},
		MarketCap: {
			type: Number
		},
		IPOyear: {
			type: Date
		},
		Sector: {
			type: String
		},
		industry: {
			type: String
		},
		'Summary Quote':{
			type: String
		},
		comments:[commentSchema]
	});
	
	mongoose.model("Stock", stockSchema);
var mongoose = require('mongoose');
	
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
		}
	});
	
	mongoose.model("Stock", stockSchema);
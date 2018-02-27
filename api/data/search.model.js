var mongoose = require('mongoose');

var searchSchema = new mongoose.Schema({
	Name: String,
	Symbol: String
});

mongoose.model('Search', searchSchema);
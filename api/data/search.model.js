var mongoose = require('mongoose');

var searchSchema = new mongoose.Schema({
	search: String
});

mongoose.model('Search', searchSchema);
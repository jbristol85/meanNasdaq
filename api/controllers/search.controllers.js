var mongoose = require('mongoose');
var Search = mongoose.model('Search');

module.exports.searchGetOne = function(req, res){
	var searchTerm = req.params.searchTerm;
	console.log("GET searchTerm" , searchTerm);
	
	// Search
	// 	.findOne({Symbol : searchTerm})
	// 	.exec(function(err, stock){
	// 		console.log("Inside searchGetOne", stock);
	// 		console.log("Inside searchGetOne", err);
	// 		if(err){
	// 			console.log('Error finding Stock Symbol');
	// 			res
	// 				.status(500)
	// 				.json(err);
	// 		} else if (!stock){
	// 			console.log("Symbol not in the database");
	// 			res
	// 				.status(404)
	// 				.json(searchTerm + " not found");
	// 		} else{
	// 			res
	// 				.status(200)
	// 				.json(stock);
	// 		}
	// 	});
};
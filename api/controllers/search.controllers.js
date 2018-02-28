// var mongoose = require('mongoose');
// var Search = mongoose.model('Search');

// module.exports.saveSearch = function(req, res){
// 	var stockId = req.body.stockId;
// 	console.log("POST save stockId");
	

	
// 	Search.create({
// 		searchSymbol: stockId
// 	}, function(err, search){
// 		console.log(search);
// 		if(err){
// 			console.log(err);
// 			res.status(400).json(err);
// 		}else {
// 			console.log('Search Saved', search);
// 			res.status(201).json(search);
// 		}
// 	});
// };

	
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

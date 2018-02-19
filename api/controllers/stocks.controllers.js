var mongoose = require('mongoose');
var Stock = mongoose.model('Stock');

module.exports.stocksGetAll = function(req, res){
	console.log('Get the Stocks');
	console.log(req.query);
	
	Stock
		.find()
		.exec(function(err, stocks){
			if (err){
				console.log('Error finding Stocks');
				res
					.status(500)
					.json(err);
			}else {
				console.log("Found Stocks", stocks.length);
				res
					.json(stocks);
			}
		});
};
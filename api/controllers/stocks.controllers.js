var mongoose = require('mongoose');
var Stock = mongoose.model('Stock');

module.exports.stocksGetAll = function(req, res){
	console.log('Get the Stocks');
	console.log(req.query);
	
	var offset = 0;
	var count = 20;
	var maxCount = 30;
	
	
	Stock
		.find()
		.skip(offset)
		.limit(count)
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

module.exports.stocksGetOne = function(req, res){
	console.log('got here');
	var stockId = req.params.stockId;
	
	console.log("GET stockId", stockId );
	
	Stock
		.findById(stockId)
		.exec(function(err, doc){
			var response = {
				status : 200,
				message: doc
			};
			if(err){
				console.log("Error finding Stock");
				response.status = 500;
				response.message = err;
			} else if (!doc){
				response.status = 404;
				response.message = {'message':"Stock not found"};
			}
			res.status(response.status).json(response.message);
		});
};
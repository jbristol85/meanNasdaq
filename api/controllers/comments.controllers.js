var mongoose = require("mongoose");
var Stock = mongoose.model("Stock");

//  GET all comments for a stock
module.exports.commentsGetAll = function(req, res) {
	//copied from stocks GetOne controller but used . notation to get comments(.json(doc.comments)
	var stockId = req.params.stockId;
	console.log("GET stockId", stockId);

	Stock
		.findById(stockId)
		.select('comments') //will only pull the comments data from the json rather then full stock data
		.exec(function(err, doc) {
			console.log(doc);
			var response = {
				status: 200,
				message: []
			};
			if (err) {
				console.log("Error finding stock");
				response.status = 500;
				response.message = err;
			}
			else if (!doc) {
				console.log("stockId not in database");
				response.status = 404,
					response.message = {
						"message": "stock ID not found " + stockId
					};
			}
			else {
				response.message = doc.comments ? doc.comments : [];
			}
			res
				.status(response.status)
				.json(response.message);
		});


};

// GET one comment for a stock
module.exports.commentsGetOne = function(req, res) {
	var stockId = req.params.stockId;
	var commentId = req.params.commentId;
	console.log("GET commentId " + commentId + " for commentId " + stockId);

	Stock
		.findById(stockId)
		.select('comments') //will only pull the comments data from the json rather then full stock data
		.exec(function(err, stock) {
			console.log("Returned stock", stock);
			var comment = stock.comments.id(commentId);
			var response = {
				status: 200,
				message: {}
			};
			if (err) {
				console.log("Error finding stock");
				response.status = 500;
				response.message = err;
			}
			else if (!stock) {
				console.log("stockId not in database");
				response.status = 404,
					response.message = {
						"message": "stock ID not found " + stockId
					};
			}
			else {
				response.message = comment;

				if (!response.message) {
					response.status = 404;
					response.message = {
						"message": "Comment ID not found " + commentId
					};
				}
			}
			res
				.status(response.status)
				.json(response.message);
		});

};

var _addComment = function(req, res, stock) {

	stock.comments.push({
		name: req.body.name,
		comment: req.body.comment
	});
	stock.save(function(err, stockUpdated) {
		if (err) {
			res
				.status(500)
				.json(err);
		}
		else {
			res
				.status(201)
				.json(stockUpdated.comments[stockUpdated.comments.length - 1]);
		}
	});
};

module.exports.commentsAddOne = function(req, res) {
	var stockId = req.params.stockId;
	console.log("GET stockId", stockId);

	Stock
		.findById(stockId)
		.select('comments') //will only pull the comments data from the json rather then full stock data
		.exec(function(err, doc) {
			console.log(doc);
			var response = {
				status: 200,
				message: []
			};
			if (err) {
				console.log("Error finding stock");
				response.status = 500;
				response.message = err;
			}
			else if (!doc) {
				console.log("stockId not in database");
				response.status = 404,
					response.message = {
						"message": "stock ID not found " + stockId
					};
			}
			if (doc) {
				_addComment(req, res, doc);
			}
			else {
				res
					.status(response.status)
					.json(response.message);
			}
		});
};

module.exports.commentsUpdateOne = function(req, res) {
	var stockId = req.params.stockId;
	var commentId = req.params.commentId;
	console.log("GET commentId " + commentId + " for stockId " + stockId);

	Stock
		.findById(stockId)
		.select('comments') //will only pull the comments data from the json rather then full stock data
		.exec(function(err, stock) {
			console.log("Returned stock", stock);
			var comment = stock.comments.id(commentId);
			var response = {
				status: 200,
				message: {}
			};
			if (err) {
				console.log("Error finding stock");
				response.status = 500;
				response.message = err;
			}
			else if (!stock) {
				console.log("stockId not in database");
				response.status = 404,
					response.message = {
						"message": "stock ID not found " + stockId
					};
			}
			else {
				// response.message = comment;

				if (!response.message) {
					response.status = 404;
					response.message = {
						"message": "comment ID not found " + commentId
					};
				}
			}
			if (response.status !== 200) {
				res
					.status(response.status)
					.json(response.message);
			}
			else {
				comment.name = req.body.name;
				comment.rating = parseInt(req.body.rating, 10);
				comment.comment = req.body.comment;

				stock.save(function(err, updatedComment) {
					if (err) {
						res
							.status(500)
							.json(err);
					}
					else {
						res
							.status(204)
							.json();
					}
				});
			}
		});

};

module.exports.commentsDeleteOne = function(req, res){
		var stockId = req.params.stockId;
	var commentId = req.params.commentId;
	console.log("GET commentId " + commentId + " for stockId " + stockId);

	Stock
		.findById(stockId)
		.select('comments') //will only pull the comments data from the json rather then full stock data
		.exec(function(err, stock) {
			console.log("Returned stock", stock);
			
			var response = {
				status: 200,
				message: {}
			};
			if (err) {
				console.log("Error finding stock");
				response.status = 500;
				response.message = err;
			}
			else if (!stock) {
				console.log("stockId not in database");
				response.status = 404,
					response.message = {
						"message": "stock ID not found " + stockId
					};
			}
			else {
				// response.message = comment;

				if (!response.message) {
					response.status = 404;
					response.message = {
						"message": "comment ID not found " + commentId
					};
				}
			}
			if (response.status !== 200) {
				res
					.status(response.status)
					.json(response.message);
			}else {
				stock.comments.id(commentId).remove();
				stock.save(function(err, updatedComment) {
					if (err) {
						res
							.status(500)
							.json(err);
					}
					else {
						res
							.status(204)
							.json();
					}
				});
			}
		});
};
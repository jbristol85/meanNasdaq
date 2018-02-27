var express= require('express');
var router = express.Router();

var ctrlStocks = require('../controllers/stocks.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');
var ctrlComments = require('../controllers/comments.controllers.js');
var ctrlSearch = require('../controllers/search.controllers.js');

router
	.route('/stocks')
	.get(ctrlStocks.stocksGetAll);
	
router
	.route('/stock/:stockId')
	.get(ctrlStocks.stocksGetOne); 
	
router
	.route('/stock/:stockId/comments')
	.get(ctrlComments.commentsGetAll)  // mapped a controller to the route
	.post(ctrlUsers.authenticate, ctrlComments.commentsAddOne);
	
router
	.route('/stock/:stockId/comments/:commentId')
	.get(ctrlComments.commentsGetOne)
	.put(ctrlComments.commentsUpdateOne)
	.delete(ctrlComments.commentsDeleteOne);
	
	//Authentication 
router
	.route('/users/register')
	.post(ctrlUsers.register);
	
router
	.route('/users/login')
	.post(ctrlUsers.login);
	
router	
	.route('/stocks/:searchTerm')
	.get(ctrlStocks.searchGetOne)
	// .post(ctrlStocks.searchGetOne);
	
	module.exports= router;
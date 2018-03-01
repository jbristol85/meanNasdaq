var express= require('express');
var router = express.Router();

var ctrlStocks = require('../controllers/stocks.controllers.js');
var ctrlUsers = require('../controllers/users.controllers.js');
var ctrlComments = require('../controllers/comments.controllers.js');
// var ctrlSearch = require('../controllers/search.controllers.js');

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
	.get(ctrlStocks.searchGetOne);
	// .post(ctrlUsers.savedSearch);
	// .post(ctrlStocks.searchGetOne);
router
	.route('/users/:user')
	.get(ctrlUsers.getUser);
	
// router
// 	.route('/users/:user/savedSearches')
// 	.get(ctrlUsers.userSearched)
	
router
	.route('/users/:user/save')
	// .get(ctrlUsers.getSavedStocks)
	.post(ctrlUsers.savedStock);

router
	.route('/users/:user/saveSearch/:searchId')
	.post(ctrlUsers.saveSearch);
// router
// 	.route('/users/:user/saved')
// 	.get(ctrlUsers.getSavedStocks)
// router
// 	.route('/save/:stockId')
// 	.post(ctrlSearch.saveSearch);
	
	module.exports= router;
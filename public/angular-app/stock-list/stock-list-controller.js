/* global angular */
angular.module('meannasdaq').controller('StocksController', StocksController);

function StocksController(stockDataFactory){
	var vm = this;
	vm.title = "Nasdaq Stock App";
	stockDataFactory.stockList().then(function(response){
		// console.log(response);
		vm.stocks = response.data;
	});
}
 
//, ['angularUtils.directives.dirPagination']
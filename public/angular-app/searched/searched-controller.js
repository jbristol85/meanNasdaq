/* global angular */

angular.module('meannasdaq').controller('SearchedController', SearchedController);

function SearchedController ($routeParams, stockDataFactory){
	var vm = this;
	
	var searchId = $routeParams.id
	console.log("vm", searchId)
	
	stockDataFactory.stockDisplay(searchId).then(function(response){
		console.log("SearchedController response", response)
		vm.stock = response.data;
	})
}
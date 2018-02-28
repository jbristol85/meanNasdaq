/* global angular */

angular.module('meannasdaq').controller('SaveController', SaveController);

function SaveController($http, $window, $location, stockDataFactory){
	var vm = this;
	
	
	console.log("saveController");

	vm.save = function(){
		var saveSymbol = vm.saveSymbol.toUpperCase();
		console.log('saveSymbol', saveSymbol);
		stockDataFactory.postSearch(saveSymbol).then(function(response){
			console.log("vm.save response.data", response.data);
			
			vm.stock = response.data;
			var id = response.data[0]._id;
			console.log("vm.save id", id);
			$location.path('/save/' + id);
			
		});
	
	};
	
}

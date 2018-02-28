/* global angular */

angular.module('meannasdaq').controller('SearchController', SearchController);

function SearchController($http, $window, $location, stockDataFactory){
	var vm = this;
	
	
	console.log("searchController");
	// vm.isSearched = function(){
	// 	if(SearchFactory.isSearched){
	// 		return true;
	// 	}else {
	// 		return false;
	// 	}
	// };
	
	vm.search = function(){
		var searchTerm = vm.searchTerm.toUpperCase();
		console.log('searchTerm', searchTerm);
		stockDataFactory.postSearch(searchTerm).then(function(response){
			console.log("vm.search response.data", response.data);
			
			vm.stock = response.data
			
			var id = response.data[0]._id
			console.log("vm.search id", id)
			$location.path('/search/' + id)
			
		});
	
	};
	
}

// /* global angular */

// angular.module('meannasdaq').controller('SearchController', SearchController);

// function SearchController($http, $window, $location, stockDataFactory){
// 	var vm = this;
// 	console.log("searchController", $window);
	
// 	vm.search = function(){
// 		var searchTerm = vm.searchTerm;
// 		console.log('searchTerm', searchTerm);
// 		stockDataFactory.postSearch(searchTerm).then(function(response){
// 			console.log("vm.search response.data", response.data);
			
// 			vm.stock = response.data
// 			var id = response.data[0]._id
// 			console.log("vm.search id", id)
// 			$location.path('/stock/' + id)
// 			// stockDataFactory.stockDisplay(id).then(function(response){
// 			// 	console.log('vm.search stockDisplay', response)
// 			// })
// 			vm.isSubmitted = true
// 		});
// 		// $http.get('/api/stocks/', searchTerm).then(function(response){
// 		// 	console.log("vm.search search controller", response);
// 		// 	if(response.data.success){
// 		// 		console.log("vm.search search controller success");
// 		// 	}
// 		// });
// 	};
// }
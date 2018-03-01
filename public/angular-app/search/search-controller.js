/* global angular */

angular.module('meannasdaq').controller('SearchController', SearchController);

function SearchController($http, $window, $location, $routeParams, stockDataFactory, jwtHelper) {
	var vm = this;


	console.log("searchController");
	// vm.isSearched = function(){
	// 	if(SearchFactory.isSearched){
	// 		return true;
	// 	}else {
	// 		return false;
	// 	}
	// };

	vm.search = function() {
		var token = jwtHelper.decodeToken($window.sessionStorage.token);
		var username = token.username;
		console.log('username', username);
		var searchTerm = vm.searchTerm.toUpperCase();
		var searchId, searchSymbol;
		console.log('searchTerm', searchTerm);
		stockDataFactory.getSearch(searchTerm).then(function(response) {
			console.log("vm.search response.data", response.data);

			vm.stock = response.data;

			var id = response.data[0]._id;
			searchId = id;
			searchSymbol = response.data[0].Symbol
			console.log('searchId', searchId, searchSymbol);
			
			console.log("vm.search id", id);
			$location.path('/search/' + id);

			// var searchId = id;

			
			stockDataFactory.postSearches(username, searchId, searchSymbol).then(function(response) {
				console.log("postSearches response.data", response);


			}).catch(function(err) {
				console.log(err);
			});
		});



	};
}


// vm.save = function(){
// 	var token = jwtHelper.decodeToken($window.sessionStorage.token);
// 	var username = token.username;
// 	var saveId = {savedId : $routeParams.id};
// 	console.log('saveId', saveId);
// 	console.log('username', username);
// 	stockDataFactory.postSearches(username, searchId).then(function(response){
// 		console.log("vm.save response.data", response);


// 	}).catch(function(err){
// 		console.log(err);
// 	});

// };

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
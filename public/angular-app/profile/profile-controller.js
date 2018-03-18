/* global angular */
angular.module('meannasdaq').controller('ProfileController', ProfileController);

function ProfileController ($route, $routeParams, $location, $window, stockDataFactory, AuthFactory, jwtHelper){
	var vm = this;
	var token = jwtHelper.decodeToken($window.sessionStorage.token);
	var username = token.username;
	stockDataFactory.getUser(username).then(function(response){
		console.log("ProfileController", response);
		
		vm.data = response.data;
		vm.saved = response.data.saved;
		vm.searches = response.data.searches;
		console.log("vm.saved", vm.saved);
		console.log('vm.searches', vm.searches);
	// for(var i = 0; i<saved.length; i++){
	// 	var savedSearches = saved[i].savedSearch;
	// 	stockDataFactory.stockDisplay(savedSearches).then(function(data){
	// 		console.log(data);
	// 	}).catch(function(err){
	// 		console.log(err)
	// 	})
	// }
	
		
	
	});
}
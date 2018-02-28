// /* global angular */
// angular.module('meannasdaq').controller('ProfileController', ProfileController);

// function ProfileController ($route, $routeParams, $location, $window, stockDataFactory, AuthFactory, jwtHelper){
// 	var vm = this;
// 	var token = jwtHelper.decodeToken($window.sessionStorage.token);
// 	var username = token.username;
// 	stockDataFactory.getSave(username).then(function(response){
// 		console.log(response);
// 		vm.saved = response.data;
// 	});
// }
/* global angular */
angular.module('meannasdaq').controller('StockController', StockController);

function StockController ($route, $routeParams, stockDataFactory, AuthFactory, $window, jwtHelper){
	var vm = this;
	var id = $routeParams.id;
	vm.isSubmitted = false;
	stockDataFactory.stockDisplay(id).then(function(response){
		console.log('this', response);
		
		vm.stock = response.data;
		vm.stock.StockUrl = response.data['Summary Quote'];
		console.log(vm.stock);
	});


vm.isLoggedIn = function(){
	if(AuthFactory.isLoggedIn){
		return true;
	}else {
		return false;
	}
};

vm.addComment = function(){
		var token = jwtHelper.decodeToken($window.sessionStorage.token);
		var username = token.username;
	
	
			var postData = {
			name: username,
			comment: vm.comment
		};
		if(vm.commentForm.$valid){
			stockDataFactory.postComment(id, postData).then(function(response){
				console.log(response);
				if(response.status === 201){
					$route.reload();
				}
			}).catch(function(error){
				console.log(error);
			});
		}else{
			vm.isSubmitted = true;
		}
}

}
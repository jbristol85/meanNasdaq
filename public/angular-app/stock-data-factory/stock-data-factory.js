/* global angular */

angular.module('meannasdaq').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http){
	return {
		stockList: stockList,
		stockDisplay:stockDisplay,
		postComment: postComment,
		postSearch: postSearch
	};
	
	function stockList(){
		return $http.get('/api/stocks').then(complete).catch(failed);
	}
	function stockDisplay(id){
		return $http.get('/api/stock/' + id).then(complete).catch(failed);
	}
	function postComment(id, comment){
		return $http.post('/api/stock/' +id + '/comments', comment).then(complete).catch(failed);
	}
	function postSearch(searchTerm){
		console.log("postSearch", searchTerm);
		return $http.get('/api/stocks/'+ searchTerm).then(complete).catch(failed);
	}
	function complete(response){
		console.log(response);
		return response;
	}
	function failed(error){
		console.log(error.statusText);
	}
}
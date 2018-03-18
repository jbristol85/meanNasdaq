/* global angular */

angular.module('meannasdaq').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http){
	return {
		stockList: stockList,
		stockDisplay:stockDisplay,
		postComment: postComment,
		getSearch: getSearch,
		postSave: postSave,
		postSearches:postSearches,
		getUser:getUser
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
	function getSearch(searchTerm){
		console.log("getSearch", searchTerm);
		return $http.get('/api/stocks/'+ searchTerm).then(complete).catch(failed);
	}
	function postSearches(username, searchId, searchSymbol){
		console.log('postSearches', username, searchId);
		return $http.post('/api/users/'+ username + '/searchid/'+ searchId+'/searchsymbol/' + searchSymbol).then(complete).catch(failed);
	}
	function getUser(username){
		console.log('getUser', username);
		return $http.get('/api/users/'+ username).then(complete).catch(failed);
	}
	function postSave(username, saveId, saveSymbol){
		console.log('postSave', username, saveId, saveSymbol);
		return $http.post('/api/users/'+ username + '/saveId/'+ saveId + '/saveSymbol/' + saveSymbol).then(complete).catch(failed);
	}
	function complete(response){
		console.log(response);
		return response;
	}
	function failed(error){
		console.log(error.statusText);
	}
} 
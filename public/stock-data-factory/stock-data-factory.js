/* global angular */

angular.module('meannasdaq').factory('stockDataFactory', stockDataFactory);

function stockDataFactory($http){
	return {
		stockList: stockList,
		stockDisplay:stockDisplay
	};
	
	function stockList(){
		return $http.get('/api/stocks').then(complete).catch(failed);
	}
	function stockDisplay(id){
		return $http.get('/api/stock/' + id).then(complete).catch(failed);
	}
	function complete(response){
		return response;
	}
	function failed(error){
		console.log(error.statusText);
	}
}
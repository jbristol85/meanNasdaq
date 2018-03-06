/* global angular */

angular.module('meannasdaq').directive('stockSearch', stockSearch);

function stockSearch(){
	return{
		restrict: 'E',
		templateUrl: 'angular-app/search/search-directive.html',
		// controller: SearchController,
		// controllerAs: 'vm'
	};
} 
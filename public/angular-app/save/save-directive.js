/* global angular */

angular.module('meannasdaq').directive('mnSave', mnSave);

function mnSave(){
	return{
		restrict: 'E',
		templateUrl: 'angular-app/save/save-directive.html'
	};
}
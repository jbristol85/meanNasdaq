/* global angular StocksController StockController ProfileController SearchedController RegisterController*/
angular.module('meannasdaq',['ngRoute', 'angular-jwt', 'angularUtils.directives.dirPagination']).config(config).run(run);

function config($routeProvider, $httpProvider){
	$httpProvider.interceptors.push('AuthInterceptor');
	
	$routeProvider
		.when('/',{
			templateUrl: 'angular-app/main/main.html',
			controller: MainController,
			controllerAs: 'vm',
			access: {
				restricted: false
			}
		})
		.when('/stocks',{
			templateUrl: ' angular-app/stock-list/stocks.html',
			controller: StocksController,
			controllerAs: 'vm',
			access: {
				restricted: false
			}
		})
		.when('/stock/:id',{
			templateUrl: 'angular-app/stock-display/stock.html',
			controller: StockController,
			controllerAs: 'vm',
			access: {
				restricted: false
			}
		})
		.when('/register', {
			templateUrl: 'angular-app/register/register.html',
			controller: RegisterController,
			controllerAs: 'vm',
			access: {
				restricted: false
			}
		})
		.when('/profile', {
			templateUrl: 'angular-app/profile/profile.html',
			controller: ProfileController,
			controllerAs: 'vm',
			access: {
				restricted: true
			}
		})
		.when('/search/:id', {
			// redirectTo:'/stock/:id'
			templateUrl:'angular-app/searched/searched.html',
			controller: SearchedController,
			controllerAs: 'vm',
		})
		.otherwise({
			redirectTo:'/'
		});
} 

function run($rootScope, $location, $window, AuthFactory){
	$rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute){
		if(nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
			event.preventDefault();
			$location.path('/');
		}
	});
} 

// /* global angular StocksController StockController SearchController RegisterController*/
// angular.module('meannasdaq',['ngRoute', 'angular-jwt']).config(config).run(run);

// function config($routeProvider, $httpProvider){
// 	$httpProvider.interceptors.push('AuthInterceptor');
	
// 	$routeProvider
// 		.when('/',{
// 			templateUrl: 'angular-app/main/main.html',
// 			access: {
// 				restricted: false
// 			}
// 		})
// 		.when('/stocks',{
// 			templateUrl: ' angular-app/stock-list/stocks.html',
// 			controller: StocksController,
// 			controllerAs: 'vm',
// 			access: {
// 				restricted: false
// 			}
// 		})
// 		.when('/stock/:id',{
// 			templateUrl: 'angular-app/stock-display/stock.html',
// 			controller: StockController,
// 			controllerAs: 'vm',
// 			access: {
// 				restricted: false
// 			}
// 		})
// 		.when('/register', {
// 			templateUrl: 'angular-app/register/register.html',
// 			controller: RegisterController,
// 			controllerAs: 'vm',
// 			access: {
// 				restricted: false
// 			}
// 		})
// 		.when('/profile', {
// 			templateUrl: 'angular-app/profile/profile.html',
// 			access: {
// 				restricted: true
// 			}
// 		})
// 		.when('/stocks/:searchTerm', {
// 			// redirectTo:'/stock/:id'
// 			templateUrl:'angular-app/searched/searched.html',
// 			controller: SearchController,
// 			controllerAs: 'vm',
// 		})
// 		.otherwise({
// 			redirectTo:'/'
// 		});
// } 

// function run($rootScope, $location, $window, AuthFactory){
// 	$rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute){
// 		if(nextRoute.access !== undefined && nextRoute.access.restricted && !$window.sessionStorage.token && !AuthFactory.isLoggedIn) {
// 			event.preventDefault();
// 			$location.path('/');
// 		}
// 	});
// } 
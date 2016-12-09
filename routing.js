angular.module('MyDreamStore', ['ngRoute']).config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'components/dashboard/dashboard.html',
			controller  : 'dashboardController'
		})

		.when('/about', {
			templateUrl : 'components/about/about.html',
			controller  : 'aboutController'
		})

		.when('/task', {
			templateUrl : 'components/task/task.html',
			controller  : 'taskController'
		})



});
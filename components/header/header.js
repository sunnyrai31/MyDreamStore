angular.module("MyDreamStore").directive("sunnyHeader", function(){

	return {
		strict : "E",
		templateUrl : "components/header/header.html",
		controller: function($scope, $location) {
			$scope.menus = [
				{ name: "Dashboard", url: "/"},
				{ name: "Create Task", url: "/task"},
				{ name: "about", url: "/about"}
			]

			$scope.changeRoute = function(route) {
				$location.path(route);
			}

		}
	}

	
})
angular.module("MyDreamStore").controller("dashboardController", function($scope, $location, taskService){

	$scope.taskList =[];
	$scope.selectedTask = {};

	$scope.createTask = function() {
		$location.path("/task");
	}

	taskService.getTasks().then(function(data) {
	  	$scope.taskList = data;
	})

	$scope.selectTask = function(task) {
		$scope.selectedTask = task;
	}

	
})
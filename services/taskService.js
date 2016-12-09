angular.module("MyDreamStore").service("taskService", function($http, $q){


	var BASE_URL = "http://www.somthing.com/";

	this.createTask = function(formData) {
		var deferred = $q.defer();
	    $http({ method: 'POST', url: BASE_URL+'task/', data: formData }).success(function (data) {
	      	deferred.resolve(data);
	    }).error(function (data)
	    {
	     	deferred.reject(data);
	    })
	    return deferred.promise;
	}

	this.updateTask = function(taskId, formData) {
		var deferred = $q.defer();
	    $http({ method: 'PUT', url: BASE_URL+'task/'+ taskId, data: formData }).success(function (data) {
	      	deferred.resolve(data);
	    }).error(function (data)
	    {
	     	deferred.reject(data);
	    })
	    return deferred.promise;
	}

	this.getTasks = function() {
		var deferred = $q.defer();
	    $http({ method: 'GET', url: "api-response/task.json" }).success(function (data) {
	      	deferred.resolve(data);
	    }).error(function (data)
	    {
	     	deferred.reject(data);
	    })
	    return deferred.promise;
	}

	
})
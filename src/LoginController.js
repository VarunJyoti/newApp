angular.module('myApp').controller("LoginController", function($scope, $state){
	$scope.submitLogin = function(email, password){
		$state.transitionTo("dashboard.content");
	}

})
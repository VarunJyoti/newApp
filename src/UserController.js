angular.module('myApp').controller("UserController", function($scope, $state, $stateParams, $http){

  $http({
    method: 'GET',
    url: '/userlist'
  }).then(function (response) {
      $scope.rowCollection = response.data;
    }, function (response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
	
  if($stateParams.userId){
    $scope.record = $scope.rowCollection.find(function(e){
        if(e.userId == $stateParams.userId){
          return true;
        }
      });
  }
  $scope.addEditUser = function(row){
    if(!row){
    	$state.go("dashboard.adduser",{userId:""});
    }else{
      
      $state.go("dashboard.adduser",{userId:row.userId});
    }
  }

  $scope.goBack = function(){
  	$state.go("dashboard.listuser");
  }

})
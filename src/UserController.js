angular.module('myApp').controller("UserController", function($scope, $state, $stateParams){
	$scope.rowCollection = [
      {userId:"1", firstName: 'Laurent', lastName: 'sa@e.com', phone: "1234545", email: 'whatever@gmail.com'},
      {userId:"2", firstName: 'Blandine', lastName: 'as@sa.com', phone: "5645635", email: 'oufblandou@gmail.com'},
      {userId:"3", firstName: 'Francoise', lastName: 'hj@d.com', phone: "543543", email: 'raymondef@gmail.com'},
      {userId:"4", firstName: 'Laurent', lastName: 'sa@e.com', phone: "5435646", email: 'whatever@gmail.com'},
      {userId:"5", firstName: 'Blandine', lastName: 'as@sa.com', phone: "543534", email: 'oufblandou@gmail.com'},
      {userId:"6", firstName: 'Francoise', lastName: 'hj@d.com', phone: "53453", email: 'raymondef@gmail.com'}
  ];
  if($stateParams.userId != ""){
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
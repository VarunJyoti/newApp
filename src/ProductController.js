angular.module('myApp').controller("ProductController", function($scope, $state){
	$scope.rowCollection = [
      {name: 'Regular', price: '1.34', quantity: "21"},
      {name: 'Super', price: '3.34', quantity: "24"},
      {name: 'Diesel', price: '1.34', quantity: "100"},
      {name: 'Propane', price: '4.55', quantity: "34"}
  ];

  /*$scope.addEditProduct = function(){
  	$state.go("dashboard.adduser",{userId:""});
  }

  $scope.goBack = function(){
  	$state.go("dashboard.listproduct");
  }*/

})
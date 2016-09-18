angular.module('myApp').controller("CompanyController", function($scope, $state,$uibModal){
	$scope.rowCollection = [
      {firstName: 'Laurent', lastName: 'sa@e.com', birthDate: "USA", balance: 102, email: 'whatever@gmail.com'},
      {firstName: 'Blandine', lastName: 'as@sa.com', birthDate: "India", balance: -2323.22, email: 'oufblandou@gmail.com'},
      {firstName: 'Francoise', lastName: 'hj@d.com', birthDate: "Canada", balance: 42343, email: 'raymondef@gmail.com'},
      {firstName: 'Laurent', lastName: 'sa@e.com', birthDate: "USA", balance: 102, email: 'whatever@gmail.com'},
      {firstName: 'Blandine', lastName: 'as@sa.com', birthDate: "India", balance: -2323.22, email: 'oufblandou@gmail.com'},
      {firstName: 'Francoise', lastName: 'hj@d.com', birthDate: "Canada", balance: 42343, email: 'raymondef@gmail.com'}
  ];

  $scope.addEditCompany = function(){
  	$state.go("dashboard.addcompany",{companyId:""});
  }

  $scope.goBack = function(){
    $state.go("dashboard.listcompany");
  }
})
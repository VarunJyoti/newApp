angular.module('myApp').controller("UserController", function($scope, $state){
	$scope.rowCollection = [
      {firstName: 'Laurent', lastName: 'sa@e.com', birthDate: "1234545", email: 'whatever@gmail.com'},
      {firstName: 'Blandine', lastName: 'as@sa.com', birthDate: "5645635", email: 'oufblandou@gmail.com'},
      {firstName: 'Francoise', lastName: 'hj@d.com', birthDate: "543543", email: 'raymondef@gmail.com'},
      {firstName: 'Laurent', lastName: 'sa@e.com', birthDate: "5435646", email: 'whatever@gmail.com'},
      {firstName: 'Blandine', lastName: 'as@sa.com', birthDate: "543534", email: 'oufblandou@gmail.com'},
      {firstName: 'Francoise', lastName: 'hj@d.com', birthDate: "53453", email: 'raymondef@gmail.com'}
  ];

})
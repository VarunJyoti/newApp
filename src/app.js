angular.module('myApp', ['ui.router','ui.bootstrap', 'smart-table']);
angular.module('myApp').controller("MainCtrl", function($scope, $state){});

angular.module('myApp').config(function($stateProvider, $locationProvider) {
  
  var loginState = {
    name: 'login',
    url: '/',
    templateUrl: 'views/login.html',
    controller:"LoginController"
  }

  var aboutState = {
    name: 'dashboard',
    abstract: true,
    url: '/',
    templateUrl: 'views/dashboard.html'
  }

  var contentState = {
    name: 'dashboard.content',
    parent: aboutState,
    url: 'content',
    templateUrl: 'views/content.html'
  }

  var addCompanyState = {
    name: 'dashboard.addcompany',
    parent: aboutState,
    url: 'addcompany',
    templateUrl: 'views/addcompany.html'
  }

  var listCompanyState = {
    name: 'dashboard.listcompany',
    parent: aboutState,
    url: 'listcompany',
    templateUrl: 'views/companylist.html',
    controller: 'CompanyController'
  }

  var listUserState = {
    name: 'dashboard.listuser',
    parent: aboutState,
    url: 'listuser',
    templateUrl: 'views/userlist.html',
    controller: 'UserController'
  }

  $stateProvider.state(loginState);
  $stateProvider.state(aboutState);
  $stateProvider.state(contentState);
  $stateProvider.state(addCompanyState);
  $stateProvider.state(listCompanyState);
  $stateProvider.state(listUserState);

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
})


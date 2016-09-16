angular.module('myApp', ['ui.router']);
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

  $stateProvider.state(loginState);
  $stateProvider.state(aboutState);
  $stateProvider.state(contentState);
  $stateProvider.state(addCompanyState);

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
})


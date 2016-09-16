angular.module('myApp', ['ui.router']);
angular.module('myApp').controller("MainCtrl", function($scope){
    
});

angular.module('myApp').config(function($stateProvider, $locationProvider) {
  
  var loginState = {
    name: 'login',
    url: '/',
    templateUrl: 'views/login.html',
    controller:"LoginController"
  }

  var aboutState = {
    name: 'dashboard',
    url: '/dashboard',
    templateUrl: 'views/dashboard.html'
  }

  $stateProvider.state(loginState);
  $stateProvider.state(aboutState);
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  })
});


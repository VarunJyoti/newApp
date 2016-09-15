var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $locationProvider) {
  
  var loginState = {
    name: 'login',
    url: '/',
    templateUrl: 'views/login.html'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(loginState);
  $stateProvider.state(aboutState);
   $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
});
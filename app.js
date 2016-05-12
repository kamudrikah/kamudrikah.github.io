var durianApp = angular.module('durianApp',['ngRoute']);

durianApp.config(function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});

durianApp.controller('MainCtrl', function($scope){
  //code
});

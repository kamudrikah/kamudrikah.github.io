var durianApp = angular.module('durianApp',['ngRoute']);

durianApp.config(function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'main.html',
      controller: 'MainCtrl'
    }).
    when('/portfolio', {
      templateUrl: 'portfolio.html',
      controller: 'PortfolioCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});

durianApp.controller('MainCtrl', function($scope){
  console.log("MainCtrl");
});

durianApp.controller('PortfolioCtrl', function($scope){
  console.log("PortfolioCtrl");
});

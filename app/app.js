var app = angular.module("myApp", ['ngRoute','myApp.view1']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl : 'view1/view1.html',
      controller  : 'View1Ctrl'
    })
    .when('/login', {
      templateUrl : 'view1/view2.html',
     
    })
    .otherwise({
			redirectTo: 'view1/view1.html'
		});
    
});
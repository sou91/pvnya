'use strict';

angular.module('myApp.view1', ['ngRoute'])

.controller('View1Ctrl', function($scope, $location) {
  var loginObj={};
  loginObj.userName="pavan"
  loginObj.pwd="1991"

  $scope.openPage=function(){
  if($scope.loginObj.userName===loginObj.userName && $scope.loginObj.pwd===loginObj.pwd)
    $location.path("/login");
}
});
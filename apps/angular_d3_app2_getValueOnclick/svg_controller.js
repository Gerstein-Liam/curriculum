var app = angular.module('myApp', []);
	  
      app.controller('SVG_Ctrl', function($scope) {
          $scope.count = 2;
          $scope.myFunction = function() {
              $scope.count=$scope.height;
      
          }
      });
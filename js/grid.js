(function () {
    //Create a Module 
    var app = angular.module('MyApp', ['ui.grid']);  // Will use ['ng-Route'] when we will implement routing
    //Create a Controller
    app.controller('HomeController', function ($scope,$http) {
    var root = 'https://jsonplaceholder.typicode.com';  // here $scope is used for share data between view and controller
        $scope.message = "yo!";
        $http.get(root+'/posts').success( function(response) {
     // $scope.students = response; 
     	
        $scope.myData = response;
   });

        
    });

   





})();
